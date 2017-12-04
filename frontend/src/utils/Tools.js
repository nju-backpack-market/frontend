/**
 * Created by wyj on 2017/11/16.
 */
import Cookies from 'js-cookie';

export function setToken(token, expire) {
  return Cookies.set('token', token, { expires: expire });
}
export function getToken() {
  return Cookies.get('token');
}
export function removeToken() {
  return Cookies.remove('token');
}
