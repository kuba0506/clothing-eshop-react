import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import reducers from './rootReducers';
import rootSaga from './rootSaga';

const INITIAL_STATE = {};
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
// const middlewares = [thunk];

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}

export const store = createStore(reducers, INITIAL_STATE, composeWithDevTools(applyMiddleware(...middlewares)));
sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
