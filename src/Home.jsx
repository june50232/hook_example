import React, {useEffect} from 'react'

export default function Home(props) {
  // setTitle
  useEffect(() => {
    if (props.actions) props.actions.setTitle('HOME')
  }, [])
  return (
    <div>HOME</div>
  )
}