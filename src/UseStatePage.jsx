import React, { useState, useEffect } from 'react'

export default function UseStatePage(props) {

  // setTitle
  useEffect(() => {
    if (props.actions) props.actions.setTitle('UseState')
  }, [])
  return (
    <div>
      Count: 0
      <br/>
      <button>+1</button>
    </div>
  )
}
