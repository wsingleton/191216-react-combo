import React from 'react';

export class SecondComponent extends React.Component<any,any> {
    constructor(props:any) {
        super(props);
        this.state = {
            batchName: 'MyBatch',
            numBatches: 2
        }
    };

    render(){ 
        return (
            <div>  
                {/* Curly braces run expressions
                this is an example of data binding */}
                <h3>Batch name: {this.state.batchName}</h3>
            <h3>Num of batches: {this.state.numBatches}</h3>
            </div>
        )
    }


}


