/**
 * Homework2: 用 useContext + useReduce 來取代 Redux
 *
 * DIY 用類似 Redux 的 Actions 管理原本(UseReducerPage.jsx) count 的 event（add, minus, reset）
 *
 * store.js
 *
 */

import React from 'react'

export default function UseReducerHomework(props) {


    return (
        <div>

            <p>Count: {props.count}</p>
            <p><button onClick={props.actions.addCount}>+ 1</button></p>
            <p><button onClick={props.actions.minusCount}>- 1</button></p>
            <p><button onClick={props.actions.resetCount}>reset</button></p>
        </div>
    )
}
