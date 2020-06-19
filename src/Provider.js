import React, {useContext, useReducer} from "react";
import {Actions, initialStore, Reducers} from "./store";

export function Provider(props) {

    // step1 建立可訂閱的監聽參數
    const Store =

        // React.createContext:
        // 創建一個 Context store 對象。
        // 當 React 渲染訂閱這個 Context store 對象的組件時，
        // 它將從組件樹中匹配最接近的 Provider 中讀取當前的 store 值。
        React.createContext(

            // defaultValue
            initialStore
        )

    // step2
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
            // .Provider:
            // 每個 Context 對象都附帶一個 Provider React 組件，
            // 允許 consumer(使用者) 組件 來 訂閱 context 的改變。

            values={{
                ...reduceredStore,

                // 使用：props.actions()
                actions
            }}
        >
            {props.children}
        </Store.Provider>
    )
}

// TODO: study connect fn
// export function connect(App) {
//   function ConnectedApp(props) {
//     const state = useContext(store)
//     return <App {...state} {...props}/>
//   }
//   return function(props) {
//     const store = useContext(common)
//     return (
//       <Provider>
//         <App
//           {...props}
//
//           // step1
//           {...state}
//         />
//       </Provider>
//     )
//   }
//
// }
