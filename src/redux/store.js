import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import reducers from './rootReducers';

const INITIAL_STATE = {};
const middlewares = [];

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}

export const store = createStore(reducers, INITIAL_STATE, composeWithDevTools(applyMiddleware(...middlewares)));

export const persistor = persistStore(store);
