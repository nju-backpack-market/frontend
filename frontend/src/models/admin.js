/**
 * Created by wyj on 2017/11/16.
 */
import { message } from 'antd';
import * as adminService from '../services/adminServices';
import * as Tools from '../utils/Tools';

export default {

  namespace: 'admin',

  state: {
    allOrders: [],
    logisticInfoSucceed: false,
  },

  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === '/admin') {
          if (Tools.getToken()) {
            dispatch({ type: 'fetchAllOrders', payload: 1 });
          } else {
            window.location.href = '/admin-login';
          }
        }
      });
    },
  },

  effects: {
    *fetchAdminLogin({ payload: user }, { call, put }) {
      console.log(user);
      const result = yield call(adminService.adminLogin, user);
      console.log(result);
      if (result.err) {
        message.error('Login Failed');
      }
      if (result.data.token !== undefined) {
        Tools.setToken(result.data.token);
        window.location.href = '/admin';
      } else {
        message.error('Login Failed');
      }
      console.log(Tools.getToken());
    },
    *fetchAllOrders({ payload: page }, { call, put }) {
      const result = yield call(adminService.getAllOrders, page);
      console.log('orders', result);
      yield put({
        type: 'saveAllOrders',
        payload: {
          allOrders: result.data.data,
        },
      });
    },
    *fetchDelivery({ payload: info }, { call, put }) {
      console.log(info);
      const result = yield call(adminService.delivery, info);
      console.log(result);
      if (result.data) {
        message.success('Succeed');
        yield put({
          type: 'saveLogisticInfo',
          payload: {
            logisticInfoSucceed: true,
          },
        });

        const result2 = yield call(adminService.getAllOrders);
        console.log('orders', result2);
        yield put({
          type: 'saveAllOrders',
          payload: {
            allOrders: result2.data.data,
          },
        });
      } else {
        message.error('Failed, please login again');
        yield put({
          type: 'saveLogisticInfo',
          payload: {
            logisticInfoSucceed: false,
          },
        });
      }
    },
  },

  reducers: {
    saveAllOrders(state, action) {
      return { ...state, ...action.payload };
    },
    saveLogisticInfo(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
