const { readFile, writeFile, copyFile } = require('fs/promises')
const sharp = require('sharp')


async function createManifest(files, manifest) {
  await writeFile(manifest, JSON.stringify(files), (err, bytesWritten, buffer) => {
    console.log(`manifest created: ${ manifest } (${ bytesWritten } bytes.)`)
  })
}

async function createImage({ width, source, destination }) {
  try {
    const img = await sharp(source)
    const { data, info } = await img.resize({ width }).toBuffer({ resolveWithObject: true })

    const { height } = info
    const raw = source.split('/').pop()
    const matches = raw.match(/\.jpg/)
    const filename = `${raw.replace(matches[0],'')}_${width}x${height}${matches[0]}`

    const { size } = await sharp( data ).toFile(`${destination}/${filename}`)
            
    console.log(`resizing: ${source} => ${destination}/${filename} (${ size } bytes)`)

    return {
      width,
      height,
      output: `${destination}/${filename}` 
    }

  } catch( err ) {
    console.log('createImage failed:', err)
    return null
  }
  
}

// thumbnail sizes only
const outputSizes = [
  270,
  135,
  90
]
function resizeImages( source, destination ) {
  return outputSizes.map( width => createImage({ width, source, destination }) )
}

async function addImagesToEntry( entry, collection ) {
  const { thumb } = entry

  const images = /\.jpg$/.test(thumb)? await Promise.all(
    resizeImages(`./src/collections/${collection}/${thumb}`, `./public/collections/${collection}`)
  ) : null

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
    
    // loop through the deep arrays and create thumbnails for each entry
    await Promise.all( 
      ...desktop.map( async column => await Promise.all( column.map( async entry => {
        const { full } = entry
        await addImagesToEntry(entry, collection)
        // move the full size image over too
        copyFile( `./src/collections/${collection}/${full}`, `./public/collections/${collection}/${full}` )
      }))),
      // do mobile layout too
      ...mobile.map( async column => await Promise.all( column.map( async entry => {
        await addImagesToEntry(entry, collection)
      })))
    )

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