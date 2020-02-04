import {connect} from 'react-redux';
import { IState } from '../../reducers';
import { LoginComponent } from './LoginComponent';


const mapStateToProps = (state:IState) => {
    return {
        //all of the state that goes to the login component goes inside here
        loginMessage:state.userState.loginMessage
    }
}

const mapDispatchToProps = {
    //contains functions that will return actions
    //that we want the login comonent to be able to call
    //this is where the action mappers get passed in to the component
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent)