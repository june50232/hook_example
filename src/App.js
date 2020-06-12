import React from 'react';
import './App.css';
import { Route, Switch, Link, withRouter } from 'react-router-dom'
import Home from './Home'
import UseStatePage from './UseStatePage'
import UseEffectPage from './UseEffectPage'
import UseContextPage from './UseContextPage'
import UseReducerPage from './UseReducerPage'
import { connect } from './store'

function App(props) {

  return (
    <div className="App">
      <header className="App-header">
        Hooks -
        {props.title ? props.title : ''}
      </header>
      <main>
        <aside>
          <p><Link to='/'>Home</Link></p>
          <p><Link to='/useState'>useState</Link></p>
          <p><Link to='/useEffect'>useEffect</Link></p>
          <p><Link to='/useContext'>useContext</Link></p>
          <p><Link to='/useReducer'>useReducer</Link></p>
        </aside>
        <section>
          <Switch>
            <Route exact={true} path="/" render={(routeProps) => <Home {...routeProps} {...props}/>}/>
            <Route path="/useState" render={(routeProps) => <UseStatePage {...routeProps} {...props}/>}/>
            <Route path="/useEffect" render={(routeProps) => <UseEffectPage {...routeProps} {...props}/>}/>
            <Route path="/useContext" render={(routeProps) => <UseContextPage {...routeProps} {...props}/>}/>
            <Route path="/useReducer" render={(routeProps) => <UseReducerPage {...routeProps} {...props}/>}/>
          </Switch>
        </section>
      </main>
    </div>
  );
}

export default withRouter(App);
// export default withRouter(connect(App));
