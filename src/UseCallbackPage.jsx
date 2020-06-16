import React, { useState } from 'react'

const PureComponent = React.memo(function(props) {
  console.log('PureComponent render!')
  return <div>
    <p>This is a pure component. value={props.value}</p>
    <button onClick={props.addValue}> add value</button>
  </div>
})

export default function UseCallbackPage(props) {
  const [count, setCount] = useState(0)
  const [value, setValue] = useState(99)

  const addValue = () => { setValue(value + 1) }

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => { setCount(count + 1) }}> + 1 </button>
      <button onClick={() => { setValue(value - 1) }}> value - 1 </button>
      <PureComponent value={value} addValue={addValue}/>
    </div>
  )
}