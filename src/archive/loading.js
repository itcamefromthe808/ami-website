import React from 'react'
import styled from 'styled-components'

const LoadingDisplay = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
`

const LoadingIcons = styled.ul`
  list-style-type:none;
  margin:0;
  padding:0;

  li, &:before, &:after {
    display:inline-block;
    vertical-align:middle;
    margin:0 ${ 3/16 }rem;
  }

  &:before {
    font-weight:600;
    content:'[';
  }
  &:after {
    font-weight:600;
    content:']';
  }
`

// props.items is an array of boolean
const Loading = props => (
  <LoadingDisplay>
    <h4>Loading...</h4>
    <LoadingIcons _length={props.items.length}>
    { props.items.map( (item,idx) => item? <li key={ idx }>♥</li> : <li key={ idx }>-</li> ) }
    </LoadingIcons>
  </LoadingDisplay>
)

export default Loading
