import React from 'react';
import {render} from 'react-dom';
import 'babel-polyfill';
import App from 'index';
// import Signup from './components/Signup';
import NotFound from 'components/NotFoundPage';
import {Router, Route, IndexRoute} from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from 'store';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute
          component={NotFound}
        ></IndexRoute>
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('root'));
