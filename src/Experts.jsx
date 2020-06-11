import React, {useEffect, useState} from 'react'
import ExpertQuestion from './ExpertQuestions'
import {Link} from "react-router-dom";

export default function Expperts(props) {
  const [experts, setExperts] = useState([])
  const [id, setId] = useState(null)
  useEffect(() => {
    fetch('https://careu.104-dev.com.tw/api/experts').then((res) => {
      return res.json()
    }).then(result => {
      console.log('result', result)
      setExperts(result.data)
    })
  }, [])
  return (
    <div style={{ display: 'flex'}}>
      <div style={{ flex: '1' }}>
      {experts.map(expert => <p key={expert.id} onClick={() => { setId(expert.id) }}>{expert.name}</p>)}
      </div>
      <div style={{ flex: '3' }}>
        <ExpertQuestion id={id}/>
      </div>
    </div>
  )
}