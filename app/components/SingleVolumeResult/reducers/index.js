import { combineReducers } from 'redux';

import searchResults from './searchResults';

const singleVolumeResult = combineReducers({
  searchResults
});

export default singleVolumeResult;
