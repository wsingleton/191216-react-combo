import React, { SyntheticEvent } from 'react';
import { Form, FormGroup, Label, Col, Input, Button } from 'reactstrap';
import { apiLogin } from '../../remote/chuck-norris-clients/garden-book/garden-book-clients';

interface ILoginState {
    username:string,
    password:string,
    loginMessage:string
}

export class LoginComponent extends React.Component<any, ILoginState> {

    constructor(props:any) {
        super(props)
        this.state = {
            username:'',
            password:'',
            loginMessage:''
        }
    }

    //by putting event and dataa binding together, we achieve two way binding
    //user can update state, and if state is updated, the user sees the change.

    updateUsername = (e:any) => {
        this.setState({
            ...this.state,
            username: e.target.value
        })
    }

    //this is an example of event binding

    updatePassword = (e:any) => {
        this.setState({
            ...this.state,
            password: e.target.value
        })
    }

    submitLogin = (event:SyntheticEvent) => {
        event.preventDefault();
        let loginmessage = apiLogin(this.state.username, this.state.password);
        this.setState({
            ...this.state,
            loginMessage:loginmessage
        })
    }


    render() {
        return (
            <div>
            <Form onSubmit={this.submitLogin}>
                <FormGroup row>
                    <Label for="exampleUsername" sm={2}>Username</Label>
                    <Col sm={10}>
                        <Input type="text" 
                        name="Username" 
                        id="exampleUsername" 
                        placeholder="Put Username Here" 
                        value={this.state.username}
                        onChange={this.updateUsername}/>
                        {/* this is an example of data binding*/ }
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="examplePassword" sm={2}>Password</Label>
                    <Col sm={10}>
                        <Input type="password" 
                        name="password" 
                        id="examplePassword" 
                        placeholder="Put Password Here" 
                        value={this.state.password}
                        onChange={this.updatePassword}/>
                    </Col>
                </FormGroup>
                <Button color='info'>Login</Button>
            </Form>
            <p>{this.state.loginMessage}</p>
            </div>
        )
    }

}