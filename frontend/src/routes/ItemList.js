/**
 * Created by paranoia on 2017/10/24.
 */
import React from 'react';
import { connect } from 'dva';
import MainItem from '../components/MainItem';

function ItemList() {
  return (
    <div>
      <h1>这里是商品列表</h1>
      <ul>
        <MainItem />
        <MainItem />
        <MainItem />
        <MainItem />
      </ul>
    </div>
  );
}

ItemList.propTypes = {
};

export default connect()(ItemList);
