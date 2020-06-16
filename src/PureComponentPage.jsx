import React, { useState, useCallback } from 'react'

class PureComponent extends React.PureComponent
{
  constructor(props) {
    super(props)
  }
  render() {
    console.log('PureComponent rerender')
    return <div>
      <p>This is a pure component. value={this.props.value}</p>
    </div>
  }
}

const NotUpdatingComponent = React.memo((props) => {
  console.log('NotUpdatingComponent rerender.')
  return <p>This is a functional pure component. value={props.value}</p>
})

const UpdatingComponent = (props) => {
  console.log('UpdatingComponent rerender.')
  return <p>This is a always rerendered component. value={props.value}</p>
}

export default function PureComponentPage(props) {
  const [count, setCount] = useState(0)
  const [value, setValue] = useState(99)

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => { setCount(count + 1) }}> + 1 </button>
      <button onClick={() => { setValue(value - 1) }}> value - 1 </button>
      <PureComponent value={value}/>
      <NotUpdatingComponent value={value}/>
      <UpdatingComponent value={value}/>
    </div>
  )
}