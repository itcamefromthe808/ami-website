import React from 'react'
import CollectionItem from './collection-item'
import Loading from './loading'

class Collection extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      collection: this.getCollection( props.id ),
      updated: false,
      id: props.id
    }
  }

  findCurrentCollection( id ) {
    return this.props.collections.find(col => {
      return (col.href === id)
    })
  }

  getCollection( id ) {
    let collectionToLoad = this.findCurrentCollection( id )

    let imageSet = new Map()

    // initialize state as a map
    // the key saves the image URL which we set later
    // that forces the images to trigger the onload event
    // which we then use to trigger updateDimensions
    collectionToLoad.images.map(( url, idx ) => {
      const ref = React.createRef()

      imageSet.set( url, {
        url: "",
        ref: ref,
        rowSpan: "auto",
        loaded: false,
        updated: false
      })
    })

    return imageSet
  }

  imageLoaded( loadedImage ) {
    let imageCollection = new Map

    for (let [url, image] of this.state.collection) {
      if (url === loadedImage) {
        image.loaded = true
      }

      imageCollection.set( url, image )
    }

    this.setState({
      collection: imageCollection,
    })

    // trigger update when all images are loaded
    if (this.isLoaded()) {
      this.updateDimensions()
    }
  }

  setImageURLs( images ) {
    let imageCollection = new Map

    for (let [url, image] of images) {
      imageCollection.set( url, {
        ...image,
        url: url,
        loaded: false,
        updated: false,
      })
    }

    this.setState({
      collection: imageCollection,
      updated: false,
    })
  }

  isLoaded() {
    let loaded = this.state.collection.size > 0

    for (let [url, image] of this.state.collection) {
      loaded &= image.loaded
    }

    return loaded
  }

  // debounce or throttle this
  updateDimensions = () => {
    const grid = document.getElementsByClassName("grid")[0],
          autorows = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows')),
          height = Number.isNaN(autorows) ? 0 : autorows,
          gap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'))

    let imageCollection = new Map
    for (let [url, image] of this.state.collection) {
      let item = {...image}
      if (image.loaded) {
        item.rowSpan = `span ${Math.ceil((image.ref.current.getBoundingClientRect().height+gap)/(height+gap))}`
        item.updated = true
      }

      imageCollection.set(url, item)
    }

    this.setState({
      collection: imageCollection,
      updated: true
    })

    console.log("updated")
  }

  componentDidMount() {
    this.setImageURLs( this.state.collection )
    window.addEventListener("resize", this.updateDimensions)
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions)
  }

  // figure out when to reload on collection changes (routing)
  componentDidUpdate( prevProps ) {
    if ( this.props.id !== prevProps.id ) {
      this.setImageURLs( this.getCollection( this.props.id ) )
    }
  }

  render() {
    let list = []
    let collectionToLoad = this.findCurrentCollection( this.props.id )

    // build the list of items in the collection
    for (let [url, image] of this.state.collection) {
      list.push(
        <CollectionItem
          key={`col-${url}`}
          rowSpan={image.rowSpan}
          url={image.url}
          imageLoaded={() => { this.imageLoaded(url) }}
          ref={image.ref}
        />
      )
    }

    return (
      <div className="collection details">
        <h2> { collectionToLoad.text } Collection</h2>
        <p> { collectionToLoad.details }</p>

        <div className={`loading-message${this.state.updated? " is-hidden" : ""}`}>
          <Loading items={[true,false,true]} />
        </div>

        <div className={`grid${!this.state.updated? " is-hidden" : ""}`} >
          { list }
        </div>

        <style jsx>{`
          .collection {
            position: relative;
            border-top: .1rem solid #000;
          }
          h2 {
            font-size: 3rem;
            line-height: 1.1;
            margin:2rem 0 0;
          }
          p {
            margin-top:0;
          }

          .grid {
            display: grid;
            grid-gap: 30px;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            grid-auto-rows: 5px;
            opacity: 1;
            transition: opacity 1s ease-in-out;
          }
          .grid.is-hidden {
            opacity: 0;
            transition: none;
          }

          .loading-message {
            font-size: 3.2rem;
            opacity: 1;
            text-align: center;
            position: absolute;
            width: 100%;
            margin-top: 3rem;
          }
          .loading-message.is-hidden {
            opacity:0;
          }
        `}</style>
      </div>
    )
  }
}

export default Collection
