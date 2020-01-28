import React from 'react';
import logo from './logo.svg';
import './App.css';
import { FirstComponent } from './component/first-component/FirstComponent';
import { SecondComponent } from './component/second-component/SecondComponent';
import { ClickerComponent } from './component/clicker-component/ClickerComponent';
import { PropComponent } from './component/prop-component/PropComponent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { LifeCycleComponent } from './component/life-cycle-component/LifeCycleComponent';

const App: React.FC = () => {
  return (
    <div className="App">

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      
      <Router>
      <Switch>  
      <Route path='/lifecycle' component={LifeCycleComponent}/>
      <Route path='/second' component={SecondComponent}/>
      <Route path='/Clicker' component={ClickerComponent}/>
      <Route path='/props' render={()=> <PropComponent name={'dave'} color={'gold'}/>}/>
      <Route path='/' component={FirstComponent}/>
      </Switch>
      </Router>
      {/* <FirstComponent/>
      <SecondComponent/>
      <ClickerComponent/>
      <PropComponent name={'Ervin POS Stewart'} color={'Garbage'}/> */}
    </div>
  );
}

export default App;
