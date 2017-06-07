import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

//each reducer must be imported here. Need to look into implementing asyncReducers  http://stackoverflow.com/questions/32968016/how-to-dynamically-load-reducers-for-code-splitting-in-a-redux-application/33044701#33044701



const rootReducer = combineReducers({
  routing : routerReducer
});

export default rootReducer;
