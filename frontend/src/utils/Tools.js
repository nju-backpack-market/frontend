/**
 * Created by wyj on 2017/11/16.
 */
import Cookies from 'js-cookie';
import React from 'react';

export function setToken(token, expire) {
  return Cookies.set('token', token, { expires: expire });
}
export function getToken() {
  return Cookies.get('token');
}
export function removeToken() {
  return Cookies.remove('token');
}

export function getOrderStatus(status) {
  console.log(status);
  if (status === 'STOCK_OUT') {
    return <span style={{ color: 'red' }}>正在出库</span>;
  } else if (status === 'DELIVERING') {
    return <span style={{ color: 'blue' }}>物流中</span>;
  } else if (status === 'CHECKED') {
    return <span style={{ color: 'green' }}>订单已完成</span>;
  } else if (status === 'CLOSED') {
    return <span style={{ color: 'yellow' }}>订单已取消</span>;
  } else {
    return <span style={{ color: 'gray' }}>待支付</span>;
  }
}
