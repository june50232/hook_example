/**
 * homework2: 將 count 用仿 Redux 的方式（useContext, useReducer）傳進去 App
 *
 * A: Provider
 * 設定 context（可訂閱的監聽參數）：
 * step0. 建立傳『參數』下去的 composition component Provider (子組件先用 props.children)
 * step1. 建立『參數』可供訂閱監聽
 * step2. 建立變更『參數』的事件
 * step3. 建立變更『參數』的事件對外接口
 *
 * B: connect
 * 建立 監聽參數 props 的父層 的接口
 */

import React, {useContext, useReducer} from "react";
import {Actions, initialStore, Reducers} from "./store";


// step1 建立可訂閱的監聽參數
// http://react.html.cn/docs/context.html
const Store =
    // Context == connection
    // React.createContext:
    // http://react.html.cn/docs/context.html#reactcreatecontext
    // 創建一個 Context store 對象。
    // 當 React 渲染訂閱這個 Context store 對象的組件時，
    // 它將從組件樹中匹配最接近的 Provider 中讀取當前的 store 值。
    React.createContext(

        // defaultValue
        initialStore
    )


// step0 建立傳參數下去的父層
// 用 composition 做一個可傳 props.children 的 監聽參數 的 Provider
// http://react.html.cn/docs/composition-vs-inheritance.html
export function Provider(props) {

    // step2 建立變更參數的事件，讓『參數』綁定『變更事件』、並創造接口
    //
    // 將 step1可訂閱的監聽參數 綁定 變更參數事件管理模組，
    // 行成 reduceredStore 和 dispatch 兩個接口
    const [
        // reduceredStore:
        // 每次 reducer 變更後的 store，
        // 對下次觸發 actions 來說，是目前最新的 store
        reduceredStore,

        // 變更參數事件的方法
        // 使用：dispatch({ type: '' })
        // type 在 Reducers 裡定義
        dispatch
    ] = useReducer(

        // Reducers:
        // type 在 Reducers 裡定義
        Reducers,

        // useReducer 要的 init store { count: 0 }
        useContext(Store)
    )

    // step3. 拿 step2 的兩個接口 去 提供給外部使用『變更參數事件』的接口
    // Actions (模組化各個 dispatch type)
    // 提供方法給外部呼叫變更參數事件
    const actions = Actions(

        // 目前最新的、reducer 變更後的 store
        reduceredStore,

        // { type: '' } 對應到 reducer 的 types，去變更 store
        dispatch
    )

    return (
        <Store.Provider
            // step4 訂閱 context 的改變：
            // .Provider
            // 每個 Context 對象都附帶一個 Provider React 組件，
            // 允許 consumer(使用者) 組件 來 訂閱 context 的改變。
            // 注意：是 value 不是 values
            value={{
                ...reduceredStore,

                // consumer(使用者) 組件使用時：props.actions()
                actions
            }}
        >
            {props.children}
        </Store.Provider>
    )
}

// step5 建立 Component 監聽參數的接口
export function connect(Component) {
  function ConnectApp(props) {
      const state = useContext(Store)
      return <Component
          {...state}
          {...props}
      />
  }

  return function(props) {
    return (
      <Provider>
        <ConnectApp
            {...props}
        />
      </Provider>
    )
  }
}

// 不能這樣：
// export function connect(App) {
//   return function(props) {
//     const state = useContext(Store)
//     return (
//       <Provider>
//         <App
//         {...state}
//         {...props}
//         />
//       </Provider>
//     )
//   }
// }
