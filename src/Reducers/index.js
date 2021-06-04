import {combineReducers} from 'redux';
import commentsReducer from './comments';
import authReducer from 'Reducers/auth'

export default combineReducers({
    comments: commentsReducer,
    auth: authReducer
});