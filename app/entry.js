import React from 'react';
import {render} from 'react-dom';
import 'babel-polyfill';
import App from 'index';
// import Signup from './components/Signup';
// import NotFound from 'components/NotFoundPage';
import AddComicBookPage from 'components/AddComicBookPage';
import AddComicBookSeries from 'components/AddComicBookSeries';
import HomePage from 'components/HomePage';
import {Router, Route, IndexRoute} from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from 'store';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute
          component={HomePage}
        ></IndexRoute>
        <Route
          path="/addseries"
          component={AddComicBookSeries}
          testing="yep"
        ></Route>
        <Route
          path="/addissue"
          component={AddComicBookPage}
        ></Route>
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('root'));
