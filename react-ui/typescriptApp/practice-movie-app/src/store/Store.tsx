import {
    applyMiddleware,
    combineReducers,
    createStore,
    Store
} from 'redux';


import createSagaMiddleware from 'redux-saga';
//need to add redux-devtools-extentions
import { composeWithDevTools } from 'redux-devtools-extensions';

import IAppState from './IAppState.interface';
import MovieReducer from '../movie/sagas/Movie';

