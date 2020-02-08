import React, { Component, SyntheticEvent } from 'react';
import { Redirect} from 'react-router-dom';
import axios from 'axios';
import { SyntheticEventData } from 'react-dom/test-utils';


export class ShowSearchResult extends React.Component{
    constructor(props: any){
        super(props);
        this.state={
            results: [],
            search: '', 
            loading: false,
            searchNotWorking: true
        }
    }

    handleChange(event: SyntheticEventData) {
        this.setState({
          search: event.target.value,
          movieSelected: true
        });
      }


    handleSubmit =(event)=>{
        this.setState({
            loading: true
        });
        fetch(
            `http://www.omdbapi.com/?apikey=45c8ca64&t=${this.state.search}`
        ).then(response=> response.json())
         .then(data =>{
             this.setState({
                 results: data.Search,
                 loading: false
             })
         })
         .catch(()=>{
             alert('Please check spelling and try again');
             window.location.reload();
            //  console.log(this.state.results);
         });
         event.preventDefault();
         
    }
    addDefaultSrc(event){
        event.target.src =
        'https://images.unsplash.com/photo-1512149177596-f817c7ef5d4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=945&q=80';
    }

    render(){
        return(
             <div className='container'>
        <form onSubmit={this.handleSubmit}>
          <div className='input-field'>
            <input
              type='text'
              id='search'
              value={this.state.search}
              onChange={this.handleChange}
              placeholder='What Movie or TV Show are you looking for?'
              className='center'
            />
            <input type='submit' value='ok' className='btn' />
          </div>
        </form>
        {
          <div className='main-display'>
            {this.state.loading ? (
              <h1>
                Loading
                <span>
                  <img src='/images/tomato_2.png' />
                  <img src='/images/tomato_2.png' />
                  <img src='/images/tomato_2.png' />
                </span>
              </h1>
            ) : (
              this.state.results.map(result => {
                return (
                  <div className='col s12 m6 l4 ' key={result.imdbID}>
                    <a
                      onClick={() => {
                        this.props.handleClick(result.imdbID);
                        this.props.history.push(
                          `/movies/selected/${result.imdbID}`
                        );
                      }}
                    >
                      {' '}
                      <div className='card'>
                        <div className='card-image'>
                          <img
                            src={result.Poster}
                            alt={result.Title}
                            onError={this.addDefaultSrc}
                          />
                        </div>
                        <div className='card-content center-align'>
                          <h4 className='card-title'>{result.Title}</h4>
                          <p>
                            {result.Type} release year: {result.Year}
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                );
              })
            )} 
          </div>
        }
      </div>
    );

        
    }

}