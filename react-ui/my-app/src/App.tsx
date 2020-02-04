import React from 'react';
import logo from './logo.svg';
import './App.css';

import { FirstComponent } from './components/first-component/FirstComponent';
import { SecondComponent } from './components/second-component/SecondComponent';
import { PropComponent } from './components/prop-component/PropComponent';
import { ClickerComponent } from './components/click-component/ClickerComponent';
import { BrowswerRouter as Router, Route, Switch } from "react-router-dom";

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
      <FirstComponent/>
      <SecondComponent/>
      <ClickerComponent/>
      <PropComponent name={'Ben'} animal={'dog'}/>
    </div>
  );
}

export default App;
