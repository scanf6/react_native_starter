import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import rootReducer from './reducers';
import rootSaga from './sagas';

const sagasMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagasMiddleware));

sagasMiddleware.run(rootSaga);

export default store;