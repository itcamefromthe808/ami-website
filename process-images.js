const { readFile, writeFile, copyFile } = require('fs/promises')
const sharp = require('sharp')
const editorials = require('./data/collections/editorials')
const advertising = require('./data/collections/advertising')
const stillLife = require('./data/collections/still-life')


async function createManifest(files, manifest) {
  await writeFile(manifest, JSON.stringify(files), (err, bytesWritten, buffer) => {})

  console.log(`manifest created: ${ manifest }`)
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
            
    console.log(`resizing: ${source} => ${destination}/${filename} (${ size } bytes)`)

    const outputPath = destination.split('/').slice(2)

    return {
      width,
      height,
      output: `${outputPath.join('/')}/${filename}`,
      full: `${outputPath.join('/')}/${raw}`
    }

  } catch( err ) {
    console.log('createImage failed:', width, source, destination)
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

async function buildResponsiveImages( entry, collection ) {
  return /\.jpg$/.test(entry)? await Promise.all(
    resizeImages(`./src/collections/${collection}/${entry}`, `./public/collections/${collection}`)
  ) : [{
    output: `/collections/${collection}/${entry}`,
    full: `/collections/${collection}/${entry}`
  }]
}


// do the work
const testRun = 'test'
const collections = [
  editorials,
  advertising,
  stillLife
]


// TODO: actually leverage async
collections.map( async data => {
  try {
    const { collection } = data
    
    // loop through the deep arrays and create additional images for each entry
    const desktop = await Promise.all([
      ...data.desktop.map( async column => await Promise.all( column.map( async image => {

        // move the full size image over too
        copyFile( `./src/collections/${collection}/${image}`, `./public/collections/${collection}/${image}` )
        
        return await buildResponsiveImages(image, collection)
      })))
    ])

    const mobile = await Promise.all([
      ...data.mobile.map( async column => await Promise.all( column.map( async image => {
        return await buildResponsiveImages(image, collection)
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