/**
 * Created by wyj on 2017/11/16.
 */
import { request } from '../utils/request';
import config from '../config';
import * as Tools from '../utils/Tools';

export function adminLogin(user) {
  console.log(user);
  console.log(`/api/tokens?username=${user.username}&password=${user.password}`);
  return request(`${config.domain}/tokens?username=${user.username}&password=${user.password}`, {
    method: 'POST',
  });
}

export function getAllOrders(page = 1) {
  console.log(Tools.getToken());
  return request('/api/orders', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${Tools.getToken()}`,
    },
  });
}

export function delivery(info) {
  return request(`/api/orders/${info.orderId}/delivery?logistic_company=${info.logisticCompany}&logistic_code=${info.logisticCode}`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${Tools.getToken()}`,
    },
  });
}

export function getAllProducts(page) {
  console.log(page);
  return request(`${config.domain}/products?page=${page - 1}&all=false`);
}

export function getProductsInfo(id) {
  return request(`https://123.206.119.37:8080/products/${id}`);
}

export function createNewProduct(newProduct) {
  return request(`${config.domain}/products`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${Tools.getToken()}`,
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(newProduct),
  });
}
