import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-static';
import 'normalize.css';
import store from '../redux/store';
import history from '../history';
import SmashTierList from './SmashTierList';

import '../index.css';

export default () => (
  <Provider store={store}>
    <Router history={history}>
      <Route path="*" render={({ location }) => SmashTierList({ route: location.pathname })} />
    </Router>
  </Provider>
);
