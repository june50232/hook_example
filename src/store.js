/**
 * Homework2 ： 用 useContext + useReduce 來取代 Redux
 *
 * UseReducerHomework.jsx
 * App.js
 *
 */

import React, { useContext, useReducer } from 'react'

export const initialStore = {
  title: '',
  count: 0,
}

//export const store = React.createContext(initialState)

export function Reducers(state, action) {
  switch (action.type) {
    case 'SET_TITLE':
      return Object.assign({}, state, { title: action.title })
    case 'ADD_COUNT':
    case 'MINUS_COUNT':
    case 'RESET_COUNT':
      return Object.assign({}, state, { count: action.count })
    default:
  }
}

export function Actions(state, dispatch) {
  return {
    setTitle: function(title) {
      dispatch({
        type: 'SET_TITLE',
        title,
      })
    },
    addCount: function() {
      dispatch({
        type: 'ADD_COUNT',
        count: state.count + 1,
      })
    },
    minusCount: function() {
      dispatch({
        type: 'MINUS_COUNT',
        count: state.count - 1,
      })
    },
    resetCount: function() {
      dispatch({
        type: 'RESET_COUNT',
        count: 0,
      })
    },
  }
}

// 以下是同事原本寫的 demo:

// function Provider(props) {
//   const [state, dispatch] = useReducer(Reducers, initialState)
//   const actions = Actions(state, dispatch)
//   return (
//     <store.Provider value={{
//       ...state,
//       actions
//     }}>
//       {props.children}
//     </store.Provider>
//   )
// }

// export function connect(App) {
//   function ConnectedApp(props) {
//     const state = useContext(store)
//     return <App {...state} {...props}/>
//   }
//   return function(props) {
//     const store = useContext(common)
//     return (
//       <Provider>
//         <ConnectedApp {...props}/>
//       </Provider>
//     )
//   }
//
// }
