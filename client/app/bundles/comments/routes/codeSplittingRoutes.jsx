import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Layout from '../layout/Layout';

// These components will be loaded dynamically.
// import TestReactRouter from '../components/TestReactRouter/TestReactRouter';
// import T from '../components/TestReactRouterRedirect/TestReactRouterRedirect';
// import RouterCommentsContainer from '../containers/RouterCommentsContainer';

import checkAuth from '../util/checkAuth';

export default (
  <Route path="/" component={Layout}>
    <IndexRoute
      getComponent={(nextState, callback) => {
        require.ensure([], require => {
          callback(null, require('../containers/RouterCommentsContainer').default);
        });
      }}
    />
    <Route
      path="react-router"
      getComponent={(nextState, callback) => {
        require.ensure([], require => {
          callback(null, require('../components/TestReactRouter/TestReactRouter').default);
        });
      }}
    />
    <Route
      path="react-router/redirect"
      getComponent={(nextState, callback) => {
        require.ensure([], require => {
          callback(
            null,
            require('../components/TestReactRouterRedirect/TestReactRouterRedirect').default
          );
        });
      }}
      onEnter={checkAuth}
    />
  </Route>
);
