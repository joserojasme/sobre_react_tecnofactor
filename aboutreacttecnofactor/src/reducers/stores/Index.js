import User from './User';
import Caballos from './Caballos';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    User,
    Caballos
})

export default rootReducer;
