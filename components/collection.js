// this will be the data wrapped collection specifics
import React from 'react'


class Collection extends React.Component {
  render() {
    return (
      <div className="collection details">
        <h1> {this.props.id} </h1>
        <p> Some details about this collection. This section is meant to describe the images and how they relate to each other.</p>
      </div>
    )
  }
}

export default Collection
