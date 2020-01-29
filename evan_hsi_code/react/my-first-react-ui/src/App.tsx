import React from 'react';
//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {FirstComponent} from './components/first-component/FirstComponent';
import { SecondComponent } from './components/second-component/SecondComponent';
import { ClickerComponent } from './components/clicker-component/ClickerComponent';
import { PropComponent } from './components/prop-component/PropComponent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { LifecyleComponent } from './components/lifecycle-component/LifecycleComponent';
import { ChuckNorrisComponent } from './components/chuck-norris-component/ChuckNorrisComponent';
import { LoginComponent } from './components/login-component/LoginComponent';

const App: React.FC = () => {
  return (
    <div className="App">
      {/* to use react router, there is one base tag all routes must be contained in
            that tag is a component called Router */}
      <Router>
            {/* With router we will always pass in 3 objects as props: history, location, and match.
              Inside of a router we are going to have routes
              Routes by default will match inclusively
              /clicker woudl match '/' '/c' '/cl' '/cli' ... */}

              <Switch>
                {/* allows only a single route to be rendered */}
              <Route path='/login' component={LoginComponent}/>
              <Route path='/chuck' component={ChuckNorrisComponent}/>
              <Route path='/second' component={SecondComponent}/>
              <Route path='/clicker' component={ClickerComponent}/>
              <Route path='/props' render = {() => <PropComponent name={'Evan'} color={'Blue'}/> }/>
              <Route path='/lifecycle' component={LifecyleComponent}/>
              <Route path='/' component={FirstComponent}/>
              </Switch>
      </Router>
    </div>
  );
}

export default App;
