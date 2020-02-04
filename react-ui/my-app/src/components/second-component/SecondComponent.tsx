import React from 'react';

export class SecondComponent extends React.Component<any, any>{
    constructor(props:any){
        super(props)
        this.state={
            batchName: '191216JavaUsf',
            numBatches: 2
        }
    }
    render(){
        return(
            <div>
            <h3>The Batch name is : {this.state.batchName}</h3>
            <h3>The number of batches here are: {this.state.numBatches}</h3>
            
            
            </div>
        )
    }
}