import React from "react";

export class SecondComponent extends React.Component<any,any> {
    constructor(props:any){
        super(props) 
        this.state = {
            batchName: '191216JavaUsf',
            numBatch: 2
        }
    }
    render(){
        return(
            <div>
                <h3>The Batch name is: {this.state.batchName}</h3>
                <h3>The number of batches is: {this.state.numBatch}</h3>
            </div>
        )
    }
}

