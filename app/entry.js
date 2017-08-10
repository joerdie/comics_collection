import React from 'react';
import {render} from 'react-dom';
import 'babel-polyfill';
import App from 'index';
// import Signup from './components/Signup';
// import NotFound from 'components/NotFoundPage';
import AddComicBookPage from 'components/AddComicBookPage';
import AddComicBookSeries from 'components/AddComicBookSeries';
import SignupPage from 'components/SignupPage';
import HomePage from 'components/HomePage';
import MyAccountPage from 'components/MyAccountPage';
import SearchPage from 'components/SearchPage';
import SingleVolumeResult from 'components/SingleVolumeResult';
import {Router, Route, IndexRoute} from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from 'store';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute
          component={HomePage}
        />
        <Route
          path="/addseries"
          component={AddComicBookSeries}
          testing="yep"
        />
        <Route
          path="/addissue"
          component={AddComicBookPage}
        />
        <Route
          path="/signup"
          component={SignupPage}
        />
        <Route
          path="/myaccount"
          component={MyAccountPage}
        />
        <Route
          path="/searchresults/:searchstring"
          component={SearchPage}
        />
        <Route
          path="/singleVolumeResult/:cvID"
          component={SingleVolumeResult}
        />
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('root'));
