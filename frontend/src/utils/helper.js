/**
 * Created by paranoia on 2017/10/27.
 */

export function setLocalStorage(key, value) {
  return localStorage.setItem(key, JSON.stringify(value));
}

export function getLocalStorage(key) {
  const value = JSON.parse(localStorage.getItem(key));
  return value;
}
