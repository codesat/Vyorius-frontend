import {applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk';
import rootreducer from '../reducers/rootreducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const store=createStore(
    rootreducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    ));

export default store;