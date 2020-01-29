import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FirstComponent } from './components/firstcomponent/FirstComponent';
import { SecondComponent } from './components/secondcomponent/SecondComponent';
import { ClickerComponent } from './components/clickercomponent/ClickerComponent';
import { PropsComponent } from './components/propscomponent/PropsComponent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { LifecycleComponent } from './components/lifecyclecomponent/LifecycleComponent';
import { ChuckNorrisComponent } from './components/chuck_norris_component/ChuckNorrisComponent';
import { LoginComponent } from './components/logincomponent/LoginComponent';
import { PokemonComponent } from './components/pokemoncomponent/PokemonComponent';

//this is the root component
//must start with a capital letter
const App: React.FC = () => {
  return (
    <div className="App">
       
      <Router>
        {/* with a router we will alwyas pass in */}
        <Switch> 
        <Route path = '/poke' component = {PokemonComponent}/>
        <Route path ='/login' component = {LoginComponent}/>
        <Route path ='/chucknorris' component = {ChuckNorrisComponent}/>
        <Route path='/Lifecycle' render = {() => <LifecycleComponent/>}/>
        <Route path='/' component={FirstComponent}/>
        <Route path='/second'  component={SecondComponent}/>
        <Route path='/clicker'  component={ClickerComponent}/>
        <Route path='/props'  render={ () => <PropsComponent  name = {'Dio'} color = {'yellow'} />} />
        </Switch>
      </Router>
      {/* <FirstComponent/>
      <SecondComponent/>
      <ClickerComponent/>
      <PropsComponent name = {'Joseph'} color = {'hermito purpulo'}/> */}
      
    </div>
  );
}

export default App;
