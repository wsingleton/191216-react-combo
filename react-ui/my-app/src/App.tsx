import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FirstComponent } from './components/first-component/FirstComponent';
import { SecondComponent } from './components/second-component/SecondComponent'
import { PropComponent } from './components/prop-component/PropComponent';
import { ClickerComponent } from './components/click-component/ClickerComponent';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavbarComonponent } from './components/navbar-component/NavbarComponent';
import { MoviesComponent } from './components/movies-component/MoviesComponent';
import { LandingPageComponent } from './components//search-component/LandingPageComponent';

const App: React.FC = () => {
  return (
    <div className="App">
    <Router>
      <NavbarComonponent/>
      <Switch>
      <Route path='/landing' component={LandingPageComponent } />
      <Route path='/movies' component={MoviesComponent}/>
      <Route path='/second' component={SecondComponent}/>
      <Route path='/clicker' component={ClickerComponent}/>
      <Route path='/props' render={() => <PropComponent name={'Ben'} animal={'Wolf'} />} />
      <Route path='/' component={FirstComponent}/>
      </Switch>
    </Router>
      
    </div>
  );
}

export default App;
