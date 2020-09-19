import loginReducer from './loginReducer' // THIS IS A REDUCER THAT MAY NOT BE USED AND WAS ADDED SO A DEFAULT STORE COULD BE ADDED
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    loginReducer: loginReducer()
})

export default allReducers;