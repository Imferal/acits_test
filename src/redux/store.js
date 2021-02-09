
import { combineReducers, createStore } from 'redux';
import apiReducer from './apiReducer';
import dataReducer from './dataReducer';

let reducers = combineReducers({
    api: apiReducer,
    data: dataReducer,
});

let store = createStore(reducers);

export default store;
