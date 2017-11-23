/**
 * Created by paranoia on 2017/11/22.
 */
import { query } from '../services/products';

export default {
  namespace: 'products',
  state: {
    loginLoading: false,
  },
  subscriptions: {
  },
  effects: {
    *getAll({ payload }, { call, put }) {
      yield call(query);
    },
  },
  reducers: {
  },
};
