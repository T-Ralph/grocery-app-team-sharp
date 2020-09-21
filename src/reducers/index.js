import loginReducer from './loginReducer';
import shoppingReducer from './shoppingReducer'; 
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    loginReducer: loginReducer,
    shoppingReducer: shoppingReducer
})

export default allReducers;