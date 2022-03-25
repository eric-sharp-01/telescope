import reducer from './reducer'
import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const reducers = combineReducers({ main: reducer });
const store = createStore(reducers, applyMiddleware(thunk));

export default store;