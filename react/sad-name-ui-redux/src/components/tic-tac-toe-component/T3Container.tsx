import { connect } from 'react-redux';
import { T3Component } from './T3Component';
import { IState } from '../../reducers';

const mapStateToProps = (state: IState) => {
    return {
        
    }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(T3Component)