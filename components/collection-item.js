import React from 'react'

const CollectionItem = React.forwardRef((props, ref) => (
  <div
    style={{gridRowEnd: `${props.rowSpan}`}}
  >
    <img
      src={props.url}
      ref={ref}
      style={{
        width: "100%",
        display: "block"
      }}
      onLoad={() => { props.imageLoaded(props.url) }}
    />
  </div>
))


export default CollectionItem
