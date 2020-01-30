import React from 'react';

interface IPropProps{
    name:string
    color:string
}

export class PropComponent extends React.Component<IPropProps, any>{
   
    render(){
        return(
            <div>
                <p>My namne is: {this.props.name}</p>
                <p>My favorite color is: {this.props.color}</p>
            </div>
        )
    }

}