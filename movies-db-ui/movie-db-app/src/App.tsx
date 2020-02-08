import React from 'react';
import './App.css';
// import 'bootstrap/dist/cssre/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { NavbarComponent } from './components/navbar-component/NavbarComponent';
import { ShowMovieComponent } from './components/search-movie-component/ShowMovieComponent';



const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <NavbarComponent/>
        <Switch>
          <ShowMovieComponent/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
