import React from 'react';
// props are data that is passed into the component when it is made
// every instance of the component can have different or the same props
// the function much like html properties, but they are completely custom for react component


// Props are data that comes from the parent

// Interfaces naming convention 'interface I[name of component][Props or State]'
// Props Interface = interface IPropProps
// State Interface = interface IPropState
interface IPropProps{
    name:string
    color:string
}

export class PropComponent extends React.Component<IPropProps, any> {

    render() {
        return (
            <div>
                <p>My name is {this.props.name}</p>
                <p>My favorite color is {this.props.color}</p>
            </div>
        )
    }
}