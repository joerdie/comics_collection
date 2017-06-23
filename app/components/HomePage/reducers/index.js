import { combineReducers } from 'redux';

import volumes from './volumes';

const homePageReducers = combineReducers({
  volumes
});

export default homePageReducers;
