import React from 'react';

interface IClickState{
    numClicks:number
}

export class ClickerComponent extends React.Component<any,IClickState>{
    constructor (props:any){
        super(props)
        this.state = {
            numClicks:0
        }
    }

    increment = () =>{ 
        //this function takes in an object that replaces the previous state
        this.setState({
            ...this.state,
                numClicks: this.state.numClicks+20
        })
    
    }

    render(){
return(<div>
    <p>Number of Clicks:{this.state.numClicks}</p>
    <button onClick={this.increment}>+1</button>
</div>)
    }


}