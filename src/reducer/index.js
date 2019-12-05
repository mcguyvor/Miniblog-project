import {combineReducers} from 'redux';
import isLogInReducer from './isLogInReducer';
const rootReducer = combineReducers({
        user : isLogInReducer,
});
export default rootReducer;