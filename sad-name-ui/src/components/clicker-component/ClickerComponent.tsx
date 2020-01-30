import React from 'react';
interface IClickerState{
    numClick:number
}


export class ClickerComponent extends React.Component<any, IClickerState>{
    constructor(props:any){
        super(props)
        this.state={
            numClick: 0
        }
        // can bind
    //    this.increment=this.increment.bind(this);
    }

    increment=()=>{
        this.setState({
            ...this.state,
            numClick: this.state.numClick +1
        })
    }

    render(){
        return(
            <div>
                <p>Number of Clicks: {this.state.numClick}</p>
                <button onClick={this.increment}>+1</button>
            </div>
        )
    }
}