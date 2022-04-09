const { readFile, writeFile, copyFile } = require('fs/promises')
const sharp = require('sharp')


async function createManifest(files, manifest) {
  await writeFile(manifest, JSON.stringify(files), (err, bytesWritten, buffer) => {})

  console.log(`manifest created: ${ manifest }`)
}

async function createBlurFile({ source, destination }) {
  console.log(source)
  const raw = source.split('/').pop()
  const matches = raw.match(/\.jpg/)
  const blurfile = `${raw.replace(matches[0],'')}_blur${matches[0]}`
  const img = await sharp(source)
  const { size } = await sharp( data ).blur().jpeg({ quality: 60 }).toFile(`${destination}/${blurfile}`)

  console.log(`creating blur file: ${source} => ${destination}/${filename} (${ size } bytes)`)

  const outputPath = destination.split('/').slice(2)

  return `${outputPath.join('/')}/${blurfile}`
}

async function createImage({ width, source, destination }) {
  try {
    const img = await sharp(source)
    const { data, info } = await img.resize({ width }).toBuffer({ resolveWithObject: true })
    const { height } = info
    const raw = source.split('/').pop()
    const matches = raw.match(/\.jpg/)
    const filename = `${raw.replace(matches[0],'')}_${width}x${height}${matches[0]}`

    const { size } = await sharp( data ).jpeg({ quality:100, chromaSubsampling:'4:4:4' }).toFile(`${destination}/${filename}`)
            
    // console.log(`resizing: ${source} => ${destination}/${filename} (${ size } bytes)`)

    const outputPath = destination.split('/').slice(2)
    return {
      width,
      height,
      output: `${outputPath.join('/')}/${filename}`
    }

  } catch( err ) {
    console.log('createImage failed:', err)
    return null
  }
  
}

// thumbnail sizes only
// could make this an environment variable so it can be shared
const outputSizes = [
  540,
  270,
  135,
  90
]
function resizeImages( source, destination ) {
  return outputSizes.map( width => createImage({ width, source, destination }) )
}

async function addImagesToEntry( entry, collection ) {
  const { full } = entry

  const images = /\.jpg$/.test(full)? await Promise.all(
    resizeImages(`./src/collections/${collection}/${full}`, `./public/collections/${collection}`)
  ) : [{
    output: `/collections/${collection}/${full}`
  }]

  const blurFile = /\.jpg$/.test(full)? await createBlurFile({ 
    source: `./src/collections/${collection}/${full}`, 
    destination: `./public/collections/${collection}` 
  }) : `/collections/${collection}/${full}`

  
  delete entry.thumb
  entry.full = `/collections/${collection}/${full}`
  entry.blur = blurFile
  entry.images = images
}


// do the work
const editorials = 'editorials'
const currentWork = 'current-work'
const stillLife = 'still-life'
const testRun = 'test'
const collections = [
  editorials,
  currentWork,
  stillLife
]


// TODO: actually leverage async
collections.map( async collection => {
  try {
    let desktop = JSON.parse( await readFile(`./data/collections/${collection}/desktop.json`) )
    let mobile = JSON.parse( await readFile(`./data/collections/${collection}/mobile.json`) )
    
    // loop through the deep arrays and create additional images for each entry
    await Promise.all([
      ...desktop.map( async column => await Promise.all( column.map( async entry => {
        const { full } = entry
        await addImagesToEntry(entry, collection)
        // move the full size image over too
        copyFile( `./src/collections/${collection}/${full}`, `./public/collections/${collection}/${full}` )
      }))),
      ...mobile.map( async column => await Promise.all( column.map( async entry => {
        await addImagesToEntry(entry, collection)
      })))
    ])

    // udpate the manifest json files
    await createManifest({ 
      desktop, 
      mobile, 
      collection 
    }, `./public/collections/${collection}/manifest.json`)

  } catch( err ) {
    console.log('it broke', err)
  }
})