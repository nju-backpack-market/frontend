/**
 * Created by wyj on 2017/11/10.
 */
import React from 'react';
import { connect } from 'dva';
import { Row, Col } from 'antd';
import SimpleOrderGoodsItem from './SimpleOrderGoodsItem';
import styles from './simpleOrderManageItem.less';

class SimpleOrderManageItem extends React.Component {
  render() {
    return (
      <div>
        <div className={styles.simpleTableTitle}>
          <Row>
            <Col span={15}><span>商品名称</span></Col>
            <Col span={3}><span>单价</span></Col>
            <Col span={3}><span>数量</span></Col>
            <Col span={3}><span>小计</span></Col>
          </Row>
        </div>
        <div>
          <SimpleOrderGoodsItem />
          <SimpleOrderGoodsItem />
          <SimpleOrderGoodsItem />
        </div>
        <div className={styles.priceInfo}>
          <div>共 <span className={styles.orderGoodsNum}>2</span> 件商品&nbsp;&nbsp;&nbsp;商品金额
            &nbsp;&nbsp;<span className={styles.totalPrice}>$320</span></div>
        </div>
      </div>
    );
  }
}

export default connect()(SimpleOrderManageItem);
