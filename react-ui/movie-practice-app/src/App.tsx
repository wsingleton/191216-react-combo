import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavbarComonponent } from './components/navbar-component/NavbarComponent';
import { LandingPage } from './components/landing-page-component/LandingPageComponent';

const App: React.FC = () => {
  return (
    <div className="App">
     <Router>
      <NavbarComonponent/>
      <LandingPage/>
      <Switch>
        <Route path='/'/>
      </Switch>

     </Router>
    </div>
  );
}

export default App;
