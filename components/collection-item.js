import React from 'react'

const CollectionItem = React.forwardRef((props, ref) => (
  <div
    style={{gridRowEnd: `${props.rowSpan}`}}
  >
    <img
      src={props.image}
      ref={ref}
      style={{
        width: "100%",
        display: "block"
      }}
    />
  </div>
))


export default CollectionItem
