/**
 * homework2: 將 count 用仿 Redux 的方式（useContext, useReducer）傳進去 App
 *
 */

import React, {
    useContext,
    useReducer,
} from 'react';
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {
    Provider,
    reducerStore,
} from './Provider'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider>
          <App
              // 因為 React 渲染訂閱（useContext、createContext）這個 Context store 對象的組件
              // React 將從組件樹中匹配最接近的 Provider 中讀取當前的 store 值。
              {...reducerStore}
          />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
