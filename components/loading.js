import React from 'react'

// props.items is an array of boolean
const Loading = props => (
  <ul _length={props.items.length}>
  {props.items.forEach( item  => {
    if (item) {
      <li>♥</li>
    } else {
      <li>N</li>
    }
  })}
  </ul>
)

export default Loading
