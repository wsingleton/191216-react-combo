import React from 'react';

interface IPropProps{
    name:string,color:string
}
export class PropComponent extends React.Component<IPropProps,any>{
constructor(props:IPropProps){super(props)

}
render(){
    return(
        <div>
            <p>My name is {this.props.name}</p>
            <p>My favorite color is {this.props.color}</p>
        </div>
    )

}
}