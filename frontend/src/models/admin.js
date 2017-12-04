/**
 * Created by wyj on 2017/11/16.
 */
import { message } from 'antd';
import * as adminService from '../services/adminServices';
import * as Tools from '../utils/Tools';

export default {

  namespace: 'admin',

  state: {
    productsList: [],
  },

  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === '/admin') {
          if (Tools.getToken()) {
            dispatch({ type: 'fetchAllProducts', payload: query });
          } else {
            window.location.href = '/admin-login';
          }
        }
        if (pathname === '/admin-newPack') {
          if (Tools.getToken()) {
            // TODO
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
    *fetchAllProducts({ payload: { page = 1 } }, { call, put }) {
      const result = yield call(adminService.getAllProducts, page);
      yield put({
        type: 'saveAllProducts',
        payload: {
          productsList: result.data._embedded.products,
        },
      });
      console.log(result);
      console.log(Tools.getToken());
    },
  },

  reducers: {
    saveAllProducts(state, { payload: { productsList } }) {
      return { ...state, productsList };
    },
  },

};
