import React from 'react'
import CollectionItem from './collection-item'

class Collection extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      images: new Map()
    }

    props.collection.images.map(( image ) => {
      this.state.images.set( image, {
        image: image,
        rowSpan: "auto",
        ref: React.createRef()
      })
    })
  }


  // debounce or throttle this
  updateDimensions = () => {
    const grid = document.getElementsByClassName("grid")[0],
          autorows = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows')),
          height = Number.isNaN(autorows) ? 0 : autorows,
          gap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'))

    let items = new Map
    this.state.images.forEach( (item, idx) => {
      items.set(idx, {
        image: item.image,
        rowSpan: `span ${Math.ceil((item.ref.current.getBoundingClientRect().height+gap)/(height+gap))}`,
        ref: item.ref
      })
    })

    console.log( 'yo!', items )
    this.setState({images: items})
  }

  componentDidMount() {
    this.updateDimensions()
    window.addEventListener("resize", this.updateDimensions)
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions)
  }

  render() {
    let list = []

    // build the list of items in the collection
    this.state.images.forEach( (item, idx) => {
      list.push(
        <li key={`col-${idx}`}>
          <CollectionItem
            {...item}
          />
        </li>
      )
    })

    return (
      <div className="collection details">
        <h2> {this.props.collection.text} </h2>
        <p> {this.props.collection.details}</p>

        <ul className="grid">
          { list }
        </ul>

        <style jsx>{`
          ul {
            display: grid;
            grid-gap: 30px;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            padding: 0;
            list-style-type: none;
          }
        `}</style>
      </div>
    )
  }
}

export default Collection
