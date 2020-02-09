import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApiCallJsComponent } from './components/ApiCallJsComponent';
import { FooterComponent } from './components/FooterComponent';
import { render } from '@testing-library/react';
import { ShowMovieComponent } from './components/ShowMovieComponent';
import { LoginComponent } from './components/LoginComponent';
import { RegisterComponent } from './components/RegisterComponent';



interface IAppState {
  imdbId: string
  movieSelected: false
  userId: string
}

class App extends React.Component<any, IAppState> {
  constructor(props){
    super(props);
    this.state={
      imdbId: '',
      movieSelected: false,
      userId: '',

    }
  }
  handleClick=(id:any)=>{
    this.setState({
      imdbId: id
    })
    
  }


  render(){
    return (
      <div className="App">
        <h1>MovieFriend</h1>
       
      <Router>
        <Switch>
        <Route
              path='/'
              exact
              render={props => (
                <ApiCallJsComponent {...props} handleClick={this.handleClick} />
              )}
            />


            <Route
            path={`/Movies/selected/${this.state.imdbId}`}
            
            render={props => (
              <ShowMovieComponent
                {...props}
                imdbID={this.state.imdbId}
                
              />
            )}
          />
          <Route
          path='/login' component={LoginComponent}
          />
          <Route
          path='/register' component={RegisterComponent}
          />
        </Switch>
      </Router>
      <FooterComponent/>
      </div>
    );
  }  
}

export default App;
