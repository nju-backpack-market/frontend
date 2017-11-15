import React from 'react';
import { connect } from 'dva';
import { Input, Button } from 'antd';
import GoodsManageItem from '../goodsManageItem/GoodsManageItem';
import styles from './goodsManagePane.less';

const Search = Input.Search;

class GoodsManagePane extends React.Component {
  render() {
    return (
      <div className={styles.goodsListWrapper}>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button type="primary">添加商品</Button>
          <Search
            placeholder="商品编号"
            style={{ width: 200, marginLeft: 50 }}
          />
        </div>
        <div className={styles.goodsList}>
          <GoodsManageItem />
          <GoodsManageItem />
          <GoodsManageItem />
          <GoodsManageItem />
          <GoodsManageItem />
          <GoodsManageItem />
          <GoodsManageItem />
          <GoodsManageItem />
          <GoodsManageItem />
          <GoodsManageItem />
        </div>
      </div>
    );
  }
}

export default connect()(GoodsManagePane);
