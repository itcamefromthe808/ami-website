import React from 'react'
import CollectionItem from './collection-item'

class Collection extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      images: new Map()
    }

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
    console.log('image loaded', loadedImage, this.isLoaded())

    // make copy of entry
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

      console.log(allImages.get(url))
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
      images: allImages
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
        <h2> {this.props.collection.text} </h2>
        <p> {this.props.collection.details}</p>

        <span style={{
            "fontSize": "3.2rem"
        }}>"Loading..."</span>

        <div className="grid" >
          { list }
        </div>

        <style jsx>{`
          .grid {
            display: grid;
            grid-gap: 30px;
            grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
            grid-auto-rows: 30px;
          }
        `}</style>
      </div>
    )
  }
}

export default Collection
