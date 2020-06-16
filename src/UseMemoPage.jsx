import React, { useState } from 'react'

const PureComponent = React.memo(function(props) {
  console.log('PureComponent render!')
  const calculateNumber = (value) => {
    console.log('calculating!')
    return 2 * value
  }
  return <div>
    <p>This is a pure component.</p>
    <p>name: {props.obj.name}, age: {props.obj.age}</p>
    <p>2 * value = {calculateNumber(props.value)}</p>
  </div>
})

export default function UseMemoPage(props) {
  const [count, setCount] = useState(0)
  const [value, setValue] = useState(99)
  const [age, setAge] = useState(29)

  const obj = { name: 'Josh', age }

  return (
    <div>
      <p>count: {count}</p>
      <p>value: {value}</p>
      <button onClick={() => { setCount(count + 1) }}>count + 1 </button>
      <button onClick={() => { setValue(value - 1) }}> value - 1 </button>
      <button onClick={() => { setAge(age - 1) }}> age - 1 </button>
      <PureComponent obj={obj} value={value}/>
    </div>
  )
}