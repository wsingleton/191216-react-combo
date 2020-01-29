import React from 'react';
import { Link } from 'react-router-dom';
export class LifecycleComponent extends React.Component<any,any> {
    constructor(props:any) {
        super(props)
        this.state = {
            numUpdate: 0
        }
    }
    componentDidMount(){
        console.log("The component now exists ");
    }
    componentDidUpdate(){
        // you are allowed to put set state in componentDidUpdate but it has to be conditional
        let someVar = false;
        if(someVar){
            this.setState({
                ...this.state,
                numUpdate:this.state.numUpdate+1
            })
        }
    }
    componentWillUnmount () {
        console.log("Cleaning up data, saying goodbye");

    }


    update = () => {
       this.forceUpdate()
    }
    render() {
        return (
            <div>
                <p>In the lifecycle component, I have been updated {this.state.numUodated}</p>
                <button onClick={this.update}>Update</button>
                <Link to='/'>Go to Home</Link>
            </div>
        )
    }
}