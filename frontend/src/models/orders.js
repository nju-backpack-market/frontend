/**
 * Created by paranoia on 2017/11/23.
 */
import { query } from '../services/orders';

export default {
  namespace: 'products',
  state: {
    loginLoading: false,
  },
  subscriptions: {
  },
  effects: {
    *queryDetail({ payload }, { call, put }) {
      yield call(query);
    },
  },
  reducers: {
  },
};
