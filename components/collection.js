import React from 'react'
import CollectionItem from './collection-item'

class Collection extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      images: new Map(),
      updated: false
    }

    // initialize state as a map
    // the key saves the image URL which we set later
    // that forces the images to trigger the onload event
    // which we then use to trigger updateDimensions
    // could use an array here and add an extra property on the object instead
    props.collection.images.map(( url, idx ) => {
      const ref = React.createRef()

      this.state.images.set( url, {
        url: "",
        ref: ref,
        rowSpan: "auto",
        loaded: false,
        updated: false
      })
    })
  }

  imageLoaded( loadedImage ) {
    let allImages = new Map

    for (let [url, image] of this.state.images) {
      if (url === loadedImage) {
        image.loaded = true
      }

      allImages.set( url, image )
    }

    this.setState({
      images: allImages
    })

    // trigger update when all images are loaded
    if (this.isLoaded()) {
      this.updateDimensions()
    }
  }

  setImageURLs() {
    let allImages = new Map

    for (let [url, image] of this.state.images) {
      allImages.set( url, {
        ...image,
        url: url
      })
    }

    this.setState({
      images: allImages
    })
  }

  isLoaded() {
    let loaded = this.state.images.size > 0

    for (let [url, image] of this.state.images) {
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

    let allImages = new Map
    for (let [url, image] of this.state.images) {
      let item = {...image}
      if (image.loaded) {
        item.rowSpan = `span ${Math.ceil((image.ref.current.getBoundingClientRect().height+gap)/(height+gap))}`
        item.updated = true
      }

      allImages.set(url, item)
    }

    this.setState({
      images: allImages,
      updated: true
    })
    console.log("updated")
  }

  componentDidMount() {
    this.setImageURLs()
    window.addEventListener("resize", this.updateDimensions)
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions)
  }

  render() {
    let list = []

    // build the list of items in the collection
    for (let [url, image] of this.state.images) {
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
        <h2> {this.props.collection.text} Collection</h2>
        <p> {this.props.collection.details}</p>

        <div className={`loading-message${this.state.updated? " is-hidden" : ""}`}>
          Loading...
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
            grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
            grid-auto-rows: 5px;
            opacity: 1;
            transition: opacity 1s ease-in-out;
          }
          .grid.is-hidden {
            opacity: 0;
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
