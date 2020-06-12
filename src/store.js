import React, { useContext, useReducer } from 'react'

const initialState = {
  title: '',
}

const store = React.createContext(initialState)
export default store

function Reducers(state, action) {
  switch (action.type) {
    case 'SET_TITLE':
      return Object.assign({}, state, { title: action.title })
    default:
  }
}

function Actions(state, dispatch) {
  return {
    setTitle: function(title) {
      dispatch({
        type: 'SET_TITLE',
        title,
      })
    }
  }
}

function Provider(props) {
  const [state, dispatch] = useReducer(Reducers, initialState)
  const actions = Actions(state, dispatch)
  return (
    <store.Provider value={{
      ...state,
      actions
    }}>
      {props.children}
    </store.Provider>
  )
}

export function connect(App) {
  function ConnectedApp(props) {
    const state = useContext(store)
    return <App {...state} {...props}/>
  }
  return function(props) {
    return (
      <Provider>
        <ConnectedApp {...props}/>
      </Provider>
    )
  }

}