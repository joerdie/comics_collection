import {createStore, applyMiddleware, compose} from 'redux';
import {syncHistoryWithStore} from 'react-router-redux';
import { browserHistory } from 'react-router';
import reduxThunk from 'redux-thunk'

import rootReducer from 'reducer';


const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const logger = store => next => action => {
  // console.log('dispatching', action)
  let result = next(action)
  // console.log('next state', store.getState())
  return result
}

// const createStoreWithMiddleware = applyMiddleware(reduxThunk, logger)(createStore);

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

const store = createStoreWithMiddleware(rootReducer, enhancers);

export const history = syncHistoryWithStore(browserHistory, store);

// if(module.hot) {
//   module.hot.accept('./reducers',() => {
//     const nextRootReducer = require('./reducers').default;
//     store.replaceReducer(nextRootReducer);
//   });
// }

export default store;
