import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FirstComponent } from './components/first-component/FirstComponent'
import { SecondComponent } from './components/second-component/SecondComponent';
import { ClickerComponent } from './components/clicker-component/ClickerComponent';
import { PropComponent } from './components/prop-component/PropComponent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { LifecycleComponent } from './components/lifecycle-component/LifecycleComponent';
import { ChuckNorrisComponent } from './components/chuck-norris-component/ChuckNorrisComponent';
import { LoginComponent } from './components/login-component/LoginComponent';
import { PokemonComponent } from './components/pokemon-component/PokemonComponent';
import { StatePassingComponent } from './components/state-passing-component/StatePassingComponent';
import { NavbarComponent } from './components/navbar-component/NavbarComponent';

//this is the root of all the components that we will make
//two rules to being a component
//1 start with a capital letter
//2 return some jsx/tsx that has one root tag
const App: React.FC = () => {
  return (
    <div className="App">
      {/* to use react router, there is one base tag all routes must be contained in
      that tag is a component called Router */}

      <Router>
        <NavbarComponent />
        {/* With router we will always pass in three objects as props
        history, match, location */}
        {/* inside of a router we are going to have routes
        routes by default will match inclusively
        /clicker that would match '/' '/c' '/cl' '/cli' ... */}
        <Switch>
          {/* What the switch does is allow only a single route inside to be rendered at one time */}
          <Route path='/state' component={StatePassingComponent }/>
          <Route path='/chucknorris' component={ChuckNorrisComponent} />
          <Route path='/lifecycle' component={LifecycleComponent} />
          <Route path='/second' component={SecondComponent} />
          <Route path='/clicker' component={ClickerComponent} />
          <Route path='/props' render={() => <PropComponent name={'Alec'} color={'grey'} />} />
          {/* the syntax for a component with props, is to use the render property with an arrow function and the component with its props */}
          <Route path='/' component={FirstComponent} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
