import * as React from 'react';
import { Provider } from 'react-redux';
import { Store } from 'redux';

import App from '../app/App';
import IAppState from '../store/IappState.interface';

interface IProps {
    store: Store<IAppState>;
}


const Root: React.FC<IProps>=({ store }) =>(
    <Provider store={store}>
        <App/>
    </Provider>
);

export  default Root;