import React from 'react';

interface IT3DisplayProps {

}

export class T3DisplayComponent extends React.PureComponent<IT3DisplayProps> {

    render = () => {
        console.log('T3DisplayComponent');
        return (
            <p>T3DisplayComponent</p>
        )
    }
}