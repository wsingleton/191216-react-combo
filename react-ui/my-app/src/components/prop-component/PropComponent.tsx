import React from 'react'


interface IPropProps{
    name:string
    animal:string
}

export class PropComponent extends React.Component<IPropProps, any>{


    render(){
        return (
            <div>
                <p>My name is { this.props.name }</p>
                <p>My favorite animal is {this.props.animal}</p>
            </div>
        )
    }
}