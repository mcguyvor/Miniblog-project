import {combineReducers} from 'redux';
import isLogInReducer from './isLogInReducer';
import userInfo from './userInfo';
const rootReducer = combineReducers({
        isLogIn : isLogInReducer,
        userInfo : userInfo
});
export default rootReducer;