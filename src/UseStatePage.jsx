import React, { useState, useContext } from 'react'
import context from "./context";

export default function UseStatePage(props) {
  const [count, setCount] = useState(0)
  const CONTEXT = useContext(context)
  return (
    <div>
      Count: {count}
      name: {CONTEXT.name}
      <br/>
      <button onClick={() => {
        setCount(count + 1)
      }}>+1</button>
    </div>
  )
}
