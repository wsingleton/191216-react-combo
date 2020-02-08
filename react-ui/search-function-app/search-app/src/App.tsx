import React from 'react';
import logo from './logo.svg';
import './App.css';
import { MovieSearchComponent } from './components/MovieSearchComponent';
import { ApiCallJsComponent } from './components/ApiCallJsComponent';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Navbar here</h1>
      </header>
      <ApiCallJsComponent/>
    </div>
  );
}

export default App;
