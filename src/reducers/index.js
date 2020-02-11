import { combineReducers } from 'redux';

import counterReducer2 from './counterReducer2';
import welcomeReducer from './welcomeReducer';

export default combineReducers({
    counter: counterReducer2,
    welcome: welcomeReducer,
})