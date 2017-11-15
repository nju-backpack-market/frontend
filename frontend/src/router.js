/* eslint-disable */
import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute } from 'dva/router';
import Main from './routes/Main';
import Admin from './routes/Admin';
import Homepage from './routes/Homepage';
import ItemInfo from './routes/ItemInfo';
import OrderInfo from './routes/OrderInfo';
import AddItemPage from './routes/AddItemPage';

function Routers({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={Main}>
        <IndexRoute component={Homepage} />
        <Route path="item" component={ItemInfo} />
        <Route path="shopping" component={OrderInfo} />
      </Route>
      <Route path="/admin" component={Admin} />
      <Route path="/admin-newPack" component={AddItemPage} />
    </Router>
  );
}

// const Routers = function ({ history }) {
//   const routes = [
//     {
//       path: '/',
//       component: Main,
//       getIndexRoute(nextState, cb) {
//         require.ensure([], require => {
//           // registerModel(app, require('./models/example'))
//           cb(null, { component: require('./routes/Homepage') });
//         }, 'itemList');
//       },
//       childRoutes: [
//         {
//           path: 'item',
//           getComponent(nextState, cb) {
//             require.ensure([], require => {
//               cb(null, require('./routes/ItemInfo'));
//             }, 'main');
//           },
//         },
//         {
//           path: 'shopping',
//           getComponent(nextState, cb) {
//             require.ensure([], require => {
//               cb(null, require('./routes/OrderInfo'));
//             }, 'main');
//           },
//         },
//       ],
//     },
//     {
//       path: '/admin',
//       component: Admin,
//     },
//   ];
//
//   return <Router history={history} routes={routes} />;
// };

Routers.propTypes = {
  history: PropTypes.object,
};

export default Routers;
