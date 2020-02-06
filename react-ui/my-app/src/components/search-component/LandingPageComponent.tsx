import React, { SyntheticEvent } from 'react';

import { Form, Label, Col, Input, FormGroup, Button } from 'reactstrap';
import { apiSearch } from '../../remote/movies-api-client/movies-api';
import { Link } from 'react-router-dom';



interface ISearchState {
    search: string
    
}


export class LandingPageComponent extends React.Component<any, ISearchState>{
    constructor(props: any) {
        super(props)
        this.state = {
            search: ''
        }
        //by putting event binding and data binding together, we achieve something called two way data binding
      //this is where the user can update state and if state is updated the user sees the change
    
    }  

    componentDidMount(){
        fetch('')
        .then((response)=>{
            return response.json();
        })
        .then((jsonRes)=>{
            this.setState({
                search: jsonRes.data.Title
            })
        })
    }

    

    //this is an example of event binding
    //we take an event created by a user, and use it to update data in our state
    updateSearch = (event: any) => {
        this.setState({
            ...this.state,
            search: event.target.value
        })

    }

    


    submitSearch = async (event: SyntheticEvent) => {
        event.preventDefault()
        let response:any = await apiSearch(this.state.search)
        this.props.updateSearch(response.body)
        this.setState({
            ...this.state,
            // loginMessage: response.loginMessage
        })
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.submitSearch}>
                    <FormGroup row>
                        <Label for="search" sm={2}>Search</Label>
                        <Col sm={10}>
                            <Input required
                                type="text"
                                name="search"
                                id="search"
                                placeholder="search a movie"
                                value={this.state.search}
                                onChange={this.updateSearch} />
                            {/* this is an example of data binding, we take data from the state and put it in our tsx */}
                        </Col>
                    </FormGroup>
                   
                    <Button color="danger">Login</Button>
                </Form>
                
                <Link to='/pokemon'>No NavBar yet</Link>
            </div>
        )
    }
}

