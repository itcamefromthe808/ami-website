import React from 'react'

const CollectionItem = React.forwardRef((props, ref) => (
  <div
    className="grid-content"
    ref={ref}
    style={{gridRowEnd: `${props.rowSpan}`}}
    allProps={{...props}}
  >
    <img
      src={props.image}
      style={{width: "100%"}}
    />
  </div>
))


export default CollectionItem
