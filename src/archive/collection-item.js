import React from 'react'

const CollectionItem = React.forwardRef((props, ref) => (
  <div
    style={{gridRowEnd: `${props.rowSpan}`}}
  >
    <img
      src={props.src}
      ref={ref}
      style={{
        width: "100%",
        display: "block"
      }}
      onLoad={() => { props.imageLoaded(props.src) }}
    />
  </div>
))


export default CollectionItem
