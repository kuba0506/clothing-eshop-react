import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import reducers from './reducers/index';

const INITIAL_STATE = {};
const middlewares = [logger];

export default createStore(reducers, INITIAL_STATE, composeWithDevTools(applyMiddleware(...middlewares)));
