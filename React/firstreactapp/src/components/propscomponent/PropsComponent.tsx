import React from 'react';

interface IPropProps {
    name:string,
    color:string
}

export class PropsComponent extends React.Component<IPropProps,any> {
    
    render() {
        return (
            <div>
                <p>Name:  {this.props.name}</p>
                <p>color:  {this.props.color}</p>
            </div>
        )
    }
}

