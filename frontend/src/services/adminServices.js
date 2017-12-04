/**
 * Created by wyj on 2017/11/16.
 */
import { request } from '../utils/request';
import config from '../config';

export function adminLogin(user) {
  console.log(user);
  console.log(`/api/tokens/${user.username}?password=${user.password}`);
  return request(`${config.domain}/tokens/${user.username}?password=${user.password}`, {
    method: 'POST',
  });
}

export function getAllProducts(page) {
  console.log(page);
  return request(`https://123.206.119.37:8080/products?page=${page - 1}&all=false`);
}

export function getProductsInfo(id) {
  return request(`https://123.206.119.37:8080/products/${id}`);
}
