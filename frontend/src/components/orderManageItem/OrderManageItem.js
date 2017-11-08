/**
 * Created by wyj on 2017/10/27.
 */
import React from 'react';
import { connect } from 'dva';
import { Row, Col, Button } from 'antd';
import OrderGoodsItem from './OrderGoodsItem';
import styles from './orderMangeItem.less';

class OrderManageItem extends React.Component {
  render() {
    return (
      <div className={styles.orderManageItemWrapper}>
        <div>订单编号: 2017092032178071</div>
        <div className={styles.tableTitle}>
          <Row>
            <Col span={10}><span>商品名称</span></Col>
            <Col span={3}><span>单价</span></Col>
            <Col span={3}><span>数量</span></Col>
            <Col span={3}><span>小计</span></Col>
            <Col span={5}><span>状态</span></Col>
          </Row>
        </div>
        <div>
          <OrderGoodsItem />
          <OrderGoodsItem />
          <OrderGoodsItem />
        </div>
        <div className={styles.tableBottomContent}>
          <Button type="primary">详细信息</Button>
          <Button type="primary" style={{ marginLeft: 20 }}>发货</Button>
          <div className={styles.sumPrice}>
            <span>共 <span style={{ color: 'red', fontWeight: 'bold' }}>2</span> 件商品</span>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span>商品金额&nbsp;&nbsp;<span style={{ color: 'red', fontSize: '2em' }}>$ 419</span></span>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(OrderManageItem);
