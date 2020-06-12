import React, { useEffect } from 'react'

function ShowName() {
  const name = 'Josh'
  return (
    <p>Name: {name}</p>
  )
}

export default function UseContextPage(props) {
  // setTitle
  useEffect(() => {
    if (props.actions) props.actions.setTitle('UseContext')
  }, [])
  return (
    <div>
      <ShowName/>
      <ShowName/>
      <ShowName/>
      <ShowName/>
    </div>
  )
}