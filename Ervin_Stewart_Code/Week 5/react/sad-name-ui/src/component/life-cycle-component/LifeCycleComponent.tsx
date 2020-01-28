import React from 'react';
import { Link } from 'react-router-dom';

export class LifeCycleComponent extends React.Component<any, any>{
    constructor(props:any){
        super(props)
        this.state={numUpdates:0}
    }


componentDidMount(){
    console.log("hey, the component now exits");

}
update = () =>{
    let someVar = false;
    if(someVar){
    this.setState({
        ...this.state,
        numUpdates:this.state.numUpdates+1
    })
}
}

componentWillUnmount(){
    console.log("Cleaning up data, saying goodbye");
}


render (){
    return(
        <div>
            <p>{this.state.numUpdates} this is how many times i wanna kms</p>
            <button onClick={this.update}>KMS</button>
        <Link to='/'>take me home Country roads WEST VIRGINA</Link>
        </div>
    )
}




}