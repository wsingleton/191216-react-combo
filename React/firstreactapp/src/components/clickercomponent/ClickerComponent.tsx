import React from 'react';



interface IClickerState{
    numClicks: number
}

export class ClickerComponent extends React.Component<any,IClickerState> {

    constructor(props:any) {
        super(props);
        this.state = {
            numClicks: 0
        }
    };

    

    increment = () => {
        //this function takes in an object that replaces previous state
        this.setState({
            ...this.state,
            numClicks: this.state.numClicks + 1
        })
    }

    render(){
        return (
            <div>
    <p>number of clicks: {this.state.numClicks} </p> 
                
                <br></br>
                <button onClick ={this.increment}>click me</button>
            </div>
        )
    }


}



