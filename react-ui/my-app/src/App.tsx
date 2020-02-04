import React from 'react';
import './App.css';

import { FirstComponent } from './components/first-component/FirstComponent';
import { SecondComponent } from './components/second-component/SecondComponent'
import { PropComponent } from './components/prop-component/PropComponent';
import { ClickerComponent } from './components/click-component/ClickerComponent';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App: React.FC = () => {
  return (
    <div className="App">
    <Router>
      <Switch>
      <Route path='/' component={SecondComponent}/>
      <Route path='/clicker' component={ClickerComponent}/>
      <Route path='/props' render={() => <PropComponent name={'Alec'} animal={'grey'} />} />
        <Route path='/' component={FirstComponent}/>
      </Switch>
    </Router>
      
    </div>
  );
}

export default App;
