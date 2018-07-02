/**
 * Created by wyj on 2017/11/1.
 */
import React from 'react';
import { connect } from 'dva';
import { Row, Col } from 'antd';
import styles from './orderGoodsItem.less';
import { getOrderStatus } from '../../utils/Tools';

class OrderGoodsItem extends React.Component {
  render() {
    const item = this.props.goodItem;
    console.log(item);
    return (
      <div className={styles.orderGoodsItemWrapper}>
        <Row type="flex" justify="space-around" align="middle">
          <Col span={10}>
            <div className={styles.bagName}>
              <div>{item.name}</div>
              {/* <div>尺寸 300 * 600 * 400</div>*/}
            </div>
          </Col>
          <Col span={3}>
            <div>￥ {item.price}</div>
          </Col>
          <Col span={3}>
            <div>{this.props.num}</div>
          </Col>
          <Col span={3}>
            <div>￥ {this.props.totalPrice}</div>
          </Col>
          <Col span={5}>
            <div>{getOrderStatus(this.props.status)}</div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default connect()(OrderGoodsItem);
