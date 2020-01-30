import React, { SyntheticEvent } from 'react';
import { Col, Input, Label, FormGroup, Form, Button } from 'reactstrap';

interface ILoginState{
    username:string
    password:string
    
}

export class LoginComponent extends React.Component<any,any>{
 constructor(props:any){
     super(props)
     this.state =
     {username: '',
     password:'',
    loginMessage:''}
 }

updateUsername = (event:any) =>{
    this.setState({
        ...this.state, 
        username: event.target.value
})
}

//this is an example of event binding
updatePassword = (event:any) =>{
    this.setState({
        ...this.state, 
        password: event.target.value
})
}

submitLogin = (event:SyntheticEvent)=>{
    event.preventDefault()
    let loginMessage = await apiLogin(this.state.username, this.state.password)
}

render(){
return(
<Form onSubmit={this.submitLogin}>
<FormGroup row>
        <Label for="exampleUsername" sm={2}>Username</Label>
        <Col sm={10}>
          <Input type="text" name="username" id="exampleUsername" placeholder="do a fucking thing nerd" 
          value={this.state.username} onChange={this.updateUsername}/>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="examplePassword" sm={2}>Password</Label>
        <Col sm={10}>
          <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" 
          value={this.state.password} onChange={this.updatePassword} />
        </Col>
      </FormGroup>
      <Button color="warning">HELP</Button>
</Form>

)
}


}