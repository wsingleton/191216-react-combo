import React from 'react';
import { Link } from 'react-router-dom';

export class LifecyleComponent extends React.Component<any, any> {
    constructor(props:any) {
        super(props);
        this.state = {
            numUpdates:0
        }
    }

    componentDidMount() {
        console.log("Hey, the component now exists.");
    }

    componentWillUnmount() {
        console.log("Cleaning up data, saying goodbye");
    }

    update = () => {
        this.forceUpdate(); //we broke this for a learning demonstration
    }

    componentDidUpdate() {
        //let someVar = false;
            this.setState({
                ...this.state,
                numUpdates: this.state.numUpdates+1
            })
    }


    render() {
        return (
            <div>
                <p>I am the lifecycle component, I have been updated {this.state.numUpdate} times</p>
                <button onClick={this.update}>update</button>
                <Link to='/'>Go to home</Link>
            </div>
        )
    }
}