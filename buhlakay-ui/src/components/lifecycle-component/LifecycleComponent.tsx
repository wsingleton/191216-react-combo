import React from 'react';
import { Link } from 'react-router-dom';

export class LifecycleComponent extends React.Component<any,any> {

    constructor(props:any) {
        super(props)
        this.state = {
            numUpdates:0
        }
    }

    componentDidMount() {
        console.log("Hey, the component now exists.")
    }

    componentDidUpdate() {
        let someVar = false;
        if (someVar) {
            this.setState({
                ...this.state,
                numUpdates:this.state.numUpdates+1
            })
        }
    }

    componentWillUnmount(){
        console.log("cleaning up data, saying goodbye");
    }

    update = () => {
        this.forceUpdate()
        }
    

    render(){
        return(
            <div>
                <p>
                    I am the lifecycle component, I have been updated {this.state.numUpdates} times
                </p>
                <button onClick={this.update}>update</button>
                <Link to='/'>Go to Home</Link> 
            </div>
        )
    }
}