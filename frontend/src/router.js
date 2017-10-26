/* eslint-disable */
import React, { PropTypes } from 'react';
import { Router } from 'dva/router';
import Main from './routes/Main';
import Admin from './routes/Admin';

const Routers = function ({ history }) {
  const routes = [
    {
      path: '/',
      component: Main,
      getIndexRoute(nextState, cb) {
        require.ensure([], require => {
          // registerModel(app, require('./models/example'))
          cb(null, { component: require('./routes/Homepage') });
        }, 'itemList');
      },
      childRoutes: [
        {
          path: 'item',
          getComponent(nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./routes/ItemInfo'));
            }, 'main');
          },
        },
        {
          path: 'shopping',
          getComponent(nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./routes/OrderInfo'));
            }, 'main');
          },
        },
      ],
    },
    {
      path: '/admin',
      component: Admin,
    },
  ];

  return <Router history={history} routes={routes} />;
};

Routers.propTypes = {
  history: PropTypes.object,
};

export default Routers;
