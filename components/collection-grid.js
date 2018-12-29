import React from 'react'
import CollectionItem from './collection-item'

class CollectionGrid extends React.component {
  render() {
    return (
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
    )
  }
}
