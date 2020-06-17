/**
 * useReducer ppt p.7
 *
 * 像 redux
 * 管理非單向流、跨元件的 state 使用
 *
 * DIY: 用 reducer 管理原本 state 的 count
 *
 */

import React, {
    useState,

    // step1
    useReducer
} from 'react'

// step1 宣告 reducer function
function countReducer(state, action) {

    switch (action.type){ // 類似 redux 用法：reducer 通常會看 type 是什麼東西

        case 'ADD': // care name
            return Object.assign(
                {},
                state,
                { count: state.count + 1 }
            )

        case 'MINUS':
            return Object.assign(
                {},
                state,
                { count: state.count - 1 }
            )

        case 'RESET':
            return { count: 0 }

        default:
            return { count: 0 }
    }
}

export default function UseReducerPage(props) {
    const [count, setCount] = useState(0)

    // step1 countReducer
    const [state, dispatch] = useReducer(countReducer, { count: 0 })

    // step2 setCount -> dispatch
    function add() {
        // DONT dispatch 裡要用 object { action: 'ADD' }
        // dispatch('ADD')
        dispatch({ action: 'ADD' })
    }

    function minus() {
        dispatch({ action: 'MINUS' })
    }

    function reset() {
        dispatch({ action: 'RESET' })
    }

    //step 0 確認畫面會用到 add, minus, reset
    return (
        <div>

            <p>Count: {state.count}</p>
            <p><button onClick={add}>+ 1</button></p>
            <p><button onClick={minus}>- 1</button></p>
            <p><button onClick={reset}>reset</button></p>
        </div>
    )
}
