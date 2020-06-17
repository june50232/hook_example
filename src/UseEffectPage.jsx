import React, { useEffect } from 'react'
import Experts from './Experts'

// TODO: Homework2 call 第一隻 api 成功後，再 call 一隻 api
// 1. 取得所有專家：https://careu.104-dev.com.tw/api/experts
// 2. 取得該專家所有問答：https://careu.104-dev.com.tw/api/experts/{id}/posts
export default function UseEffectPage(props) {

  // setTitle
  useEffect(() => {
    if (props.actions) props.actions.setTitle('UseEffect')
  }, [])
  return (
    <div>
      <Experts/>
    </div>
  )
}
