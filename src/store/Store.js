import { legacy_createStore as createStore} from 'redux'
import {compose, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import { rootReducer } from './root-reducer';

const middleWares=[logger];
const composeEnhancer= compose(applyMiddleware(...middleWares))

export const Store= createStore(rootReducer,undefined,composeEnhancer)