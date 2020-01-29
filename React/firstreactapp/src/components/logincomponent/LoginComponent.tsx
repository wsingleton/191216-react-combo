import React, { SyntheticEvent } from 'react';
import { FormGroup, Label, Col, Input, Form, Button } from 'reactstrap';
import { apiLogin } from '../../remote/garden book/gardenbook';

interface ILoginState {
    username: string,
    password: string,
    loginmessage:string
}

export class LoginComponent extends React.Component<any, ILoginState>{

    constructor(props: any) {
        super(props);
        this.state = {
            username: '',
            password: '',
            loginmessage:''
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
                loginmessage:loginmessage
            })
        }

        render() {
            return (
              <Form onSubmit={this.submitLogin} >
                <FormGroup row>
                  <Label for="exampleUsername" sm={2}>
                    Username
                  </Label>
                  <Col sm={10}>
                    <Input
                      type="text"
                      name="Username"
                      id="exampleUsername"
                      placeholder="Government Name"
                      value={this.state.username}
                      onChange={this.updateUsername}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="examplePassword" sm={2}>
                    Password
                  </Label>
                  <Col sm={10}>
                    <Input
                      type="password"
                      name="password"
                      id="examplePassword"
                      placeholder="Password"
                      value={this.state.password}
                      onChange={this.updatePassword}
                    />
                  </Col>
                </FormGroup>
                <Button color='danger'>Login</Button>
              </Form>
            );
          }

}


















