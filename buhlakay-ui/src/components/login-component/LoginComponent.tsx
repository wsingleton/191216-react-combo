import React, { SyntheticEvent } from 'react';
import { Form, FormGroup, Label, Col, Input, Button } from 'reactstrap';
import { apiLogin } from '../../remote/garden-book/garden-book-clients';

interface ILoginState {
    username: string
    password: string
    loginMessage: string
}

export class LoginComponent extends React.Component<any, ILoginState> {

    constructor(props: any) {
        super(props)
        this.state = {
            username: '',
            password: '',
            loginMessage: ''
        }
    }

    updateUsername = (event: any) => {
        this.setState({
            ...this.state,
            username: event.target.value
        })
    }

    updatePassword = (event: any) => {
        this.setState({
            ...this.state,
            password: event.target.value
        })
    }

    submitLogin = async (event: SyntheticEvent) => {
        event.preventDefault()
        let loginmessage = await apiLogin(this.state.username, this.state.password)
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
                            <Input required
                                type="text"
                                name="Username"
                                id="exampleUsername"
                                placeholder="Username"
                                value={this.state.username}
                                onChange={this.updateUsername} />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="examplePassword" sm={2}>Password</Label>
                        <Col sm={10}>
                            <Input required
                                type="password"
                                name="password"
                                id="examplePassword"
                                placeholder="Password"
                                value={this.state.password}
                                onChange={this.updatePassword} />
                        </Col>
                    </FormGroup>
                    <Button color="danger">Login</Button>
                </Form>
                <p>{this.state.loginMessage}</p>
            </div>
        )
    }
}