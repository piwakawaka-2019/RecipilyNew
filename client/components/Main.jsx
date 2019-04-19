import React from 'react'

const Main = (props) => {
  return (
    <div>
      <h1><a onClick={api.addItem}>{props.state.item}</a></h1>
    </div>
  )
}

export default Main
