import React from 'react';
import logo from './logo.svg';
import './App.css';
import {FirstComponent} from './components/first-component/FirstComponent'
import { SecondComponent } from './components/second-component/SecondComponent';
import { ClickerComponent } from './components/clicker-component/ClickerComponent';
import { PropComponent } from './components/prop-component/PropComponent';

//this is the root of all the components that we will make
//two rules to being a component
//1 start with a capital letter
//2 return some jsx/tsx that has one root tag
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
      <PropComponent name={'Alec'} color={'grey'}/>
    </div>
  );
}

export default App;
