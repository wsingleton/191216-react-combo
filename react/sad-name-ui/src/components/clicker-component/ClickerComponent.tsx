import React from 'react';

interface IClickerState {
    numClicks:number
}

export class ClickerComponent extends React.Component<any,IClickerState>{
    constructor(props:any){
        super(props)
        this.state = {
            numClicks:0
        }
    }

    //we use arrow functions because they don't have their own this, and can directly refer to the class this
    increment = () => {
        //this function takes in an object that replaces the previous state
        this.setState({
            ...this.state,
            numClicks: this.state.numClicks + 1
        })
    }

    render(){
        return (
            <div>
                <p>Number of Clicks: {this.state.numClicks}</p>
                {/* just like adding a function in html, only the property name is a little different */}
                <button onClick={this.increment}>+1</button>
            </div>
        )
    }
}