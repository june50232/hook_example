import React, { useState, useEffect } from 'react'

export default function UseReducerPage(props) {
  const [count, setCount] = useState(0)
  function add() {
    setCount(count + 1)
  }
  function minus() {
    setCount(count - 1)
  }
  function reset() {
    setCount(0)
  }

  // setTitle
  useEffect(() => {
    if (props.actions) props.actions.setTitle('UseReducer')
  }, [])
  return (
    <div>
      <p>Count: {count}</p>
      <p><button onClick={add}>+ 1</button></p>
      <p><button onClick={minus}>- 1</button></p>
      <p><button onClick={reset}>reset</button></p>
    </div>
  )
}