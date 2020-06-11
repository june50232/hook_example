import React, { useState, useEffect } from 'react'

export default function ExpertQuestion(props) {
  const [data, setData] = useState(null)
  useEffect(() => {
    if (props.id) {
      fetch(`https://careu.104-dev.com.tw/api/experts/${props.id}/posts`)
        .then(res => res.json())
        .then(result => {
          console.log('resultEQ', result)
          setData(result.data)
        })
    }
  }, [props.id])
  return (data &&
    <div>
      <p>專家：{data.expert.name}</p>
      <p>問答：</p>
      {
        data.questions.map(q => <p key={q.id}>{q.title}</p>)
      }
    </div>
  )
}