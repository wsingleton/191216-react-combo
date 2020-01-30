import React from 'react';
import { Link } from 'react-router-dom';
export class LifeCycleComponent extends React.Component<any, any>{
    constructor(props: any) {
        super(props)
        this.state = {
            numUpdates: 0
        }
    }


    componentDidMount() {
        let someVAr = false;
        if(someVAr)
            this.setState({
                ...this.state,
                numUpdates:this.state.numUpdates+1
            })
        
    }

    componentWillUnmount(){
        console.log('hello')
    }
  

    update = () => {
      this.forceUpdate()
       
    }

    render() {
        return (
            <div>
                <p>I am the LifecylcleComponent, I have been updated {this.state.numUpdates}</p>
                <button type="button" onClick={this.update}>update</button>
                <Link to='/'>Go Home</Link>
            </div>
        )
    }
}