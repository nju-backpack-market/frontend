/**
 * Created by paranoia on 2017/10/24.
 */
import React from 'react';
import { connect } from 'dva';
import MainItem from '../mainItem/MainItem';
import styles from './itemList.css';

function ItemList() {
  return (
    <div>
      <h1>这里是商品列表</h1>
      <div className={styles.itemBox}>
        <MainItem/>
        <MainItem/>
        <MainItem/>
        <MainItem/>
        <MainItem/>
        <MainItem/>
        <MainItem/>
        <MainItem/>
        <MainItem/>
      </div>
    </div>
  );
}

ItemList.propTypes = {
};

export default connect()(ItemList);
