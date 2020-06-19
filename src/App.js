/**
 * Homework2 ： 用 useContext + useReduce 來取代 Redux
 *
 * UseReducerHomework.jsx
 * store.js
 *
 */

import React, {useContext, useReducer} from 'react';
import './App.css';
import { Route, Switch, Link, withRouter } from 'react-router-dom'
import Home from './Home'
import WhatIsReactPage from './WhatIsReactPage'
import FunctionalComponentPage from './FunctionalComponentPage'
import UseStatePage from './UseStatePage'
import UseEffectHomework from './UseEffectHomework'
import UseEffectPage from './UseEffectPage'
import UseContextPage from './UseContextPage'
import UseReducerPage from './UseReducerPage'
import UseReducerHomework from './UseReducerHomework'
import PureComponentPage from './PureComponentPage'
import UseCallbackPage from './UseCallbackPage'
import UseMemoPage from './UseMemoPage'
import CustomHookPage from './CustomHookPage'
//import {connect} from "./Provider";

function App(props) {

  return (
    <div className="App">
      <header className="App-header">
        Hooks
        {props.title ? ` - ${props.title}` : ''}
      </header>
      <main>
        <aside>
          <p><Link to='/'>Home</Link></p>
          <p><Link to='/whatIsReact'>what is React?</Link></p>
          <p><Link to='/functionalComponent'>functional component</Link></p>
          <p><Link to='/useState'>useState</Link></p>
          <p><Link to='/useEffect'>useEffectPage</Link></p>
          <p><Link to='/useEffectHomework'>homework1</Link></p>
          <p><Link to='/useContext'>useContext</Link></p>
          <p><Link to='/useReducer'>useReducer</Link></p>
          <p><Link to='/useReducerHomework'>homework2</Link></p>
          <p><Link to='/pureComponent'>pure component</Link></p>
          <p><Link to='/useCallback'>useCallback</Link></p>
          <p><Link to='/useMemo'>useMemo</Link></p>
          <p><Link to='/customHook'>custom hook</Link></p>
        </aside>
        <section>
          <Switch>
            <Route exact={true} path="/" render={(routeProps) => <Home {...routeProps} {...props}/>}/>
            <Route path="/useState" render={(routeProps) => <UseStatePage {...routeProps} {...props}/>}/>
            <Route path="/useEffectHomework" render={(routeProps) => <UseEffectHomework {...routeProps} {...props}/>}/>
            <Route path="/whatIsReact" render={(routeProps) => <WhatIsReactPage {...routeProps} {...props}/>}/>
            <Route path="/functionalComponent" render={(routeProps) => <FunctionalComponentPage {...routeProps} {...props}/>}/>
            <Route path="/useEffect" render={(routeProps) => <UseEffectPage {...routeProps} {...props}/>}/>
            <Route path="/useContext" render={(routeProps) => <UseContextPage {...routeProps} {...props}/>}/>
            <Route path="/useReducer" render={(routeProps) => <UseReducerPage {...routeProps} {...props}/>}/>
            <Route path="/useReducerHomework" render={(routeProps) => <UseReducerHomework {...routeProps} {...props}/>}/>
            <Route path="/pureComponent" render={(routeProps) => <PureComponentPage {...routeProps} {...props}/>}/>
            <Route path="/useCallback" render={(routeProps) => <UseCallbackPage {...routeProps} {...props}/>}/>
            <Route path="/useMemo" render={(routeProps) => <UseMemoPage {...routeProps} {...props}/>}/>
            <Route path="/customHook" render={(routeProps) => <CustomHookPage {...routeProps} {...props}/>}/>

          </Switch>
        </section>
      </main>
    </div>
  );
}

// react-router-dom withRouter: 讓不管在哪的 component 能接收到 props: match, location, history
// 官網：https://reacttraining.com/react-router/web/api/withRouter

export default withRouter(App);
// TODO: export default withRouter(connect(App));


