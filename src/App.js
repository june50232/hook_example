import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch, BrowserRouter, Link } from 'react-router-dom'
import UseStatePage from './UseStatePage'
import UseEffectPage from './UseEffectPage'
import context from "./context";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          Hooks
        </header>
        <main>
          <aside>
            <p><Link to='/useState'>useState</Link></p>
            <p><Link to='/useEffect'>useEffect</Link></p>
          </aside>
          <section>
            <Switch>
              <Route path="/useState" render={(routeProps) => <UseStatePage {...routeProps}/>}/>
              <Route path="/useEffect" render={(routeProps) => <UseEffectPage {...routeProps}/>}/>
            </Switch>
          </section>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
