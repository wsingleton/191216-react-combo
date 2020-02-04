import React from 'react';


interface IClickerState {
    numClicks: number
}


export class ClickerComponent extends React.Component<any, IClickerState>{
    constructor(props:any){
        super(props)
        this.state ={
            numClicks: 0
        }
    }

    increment =()=>{
        this.setState({
            ...this.state,
            numClicks: this.state.numClicks + 1
        })
    }

    render(){
        return(
            <div>
                <p>Number of clicks: {this.state.numClicks}</p>
                <button onClick={this.increment}>+1</button>
            </div>
        )
    }


}