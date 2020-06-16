import React, {useState} from 'react'
import useArray from './useArray'

export default function CustomHookPage(props) {
  const toDo = useArray(['起床', '洗臉', '刷牙', '穿衣服', '出門'])

  return <div>
    {toDo.list()}
    <button onClick={toDo.rev}>reverse</button>
  </div>
}