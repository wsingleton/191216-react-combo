import React from 'react';

export class SecondComponent extends React.Component<any, any> {
    constructor(props:any) {
        super(props);
        this.state = {
            batchName: '191216-java-usf',
            numBatches: 2
        }
    }

    render() {
        return(
            <div>
                {/* wherever I put curly pcraces I can put js expressions 
                this is an example of one way databinding*/}
                <h3>{this.state.batchName}</h3>
                <h3>The number of batches here are: {this.state.numBatches}</h3>
            </div>
        )
    }

}