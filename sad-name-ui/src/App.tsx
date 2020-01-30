import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {FirstComponent} from './components/first-component/FirstComponent';
import { SecondComponent } from './components/second-component/SecondComponent';
import { ClickerComponent } from './components/clicker-component/ClickerComponent';
import { PropComponent } from './components/prop-component/PropComponent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { LifeCycleComponent } from './components/lifecycle-component/LifecycleComponent';
import { ChuckNorrisComponent } from './components/chuck-norris-component/ChuckNorrisComponent';
import { LoginComponent } from './components/login-component/LoginComponent';
import { PokemonComponent } from './components/pokemon-component/PokemonComponent';



//this is the root of all components that we will make
//Two rules for components
//1. start wtih a capital letter
//2. you have to return jsx/tsx that has one root tag
const App: React.FC = () => {
  return (
    <div className="App">
     <Router>
      <Switch>
      <Route path='/login' component={LoginComponent}/>
      <Route path='/pokemon' component={PokemonComponent}/>
      <Route path='/chucknorris' component={ChuckNorrisComponent}/>
      <Route path='/lifecycle' component = {LifeCycleComponent}/>
      <Route path='/props' render={()=><PropComponent name={'Ben'} color={'blue'}/>}/>      
      <Route path='/clicker' component={ClickerComponent}/>
      <Route path='/second' component={SecondComponent}/>
      <Route path='/' component={FirstComponent}/>
      </Switch>
     </Router>
     
  
    </div>
  );
}

export default App;
