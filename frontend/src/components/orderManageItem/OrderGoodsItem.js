/**
 * Created by wyj on 2017/11/1.
 */
import React from 'react';
import { connect } from 'dva';
import { Row, Col } from 'antd';
import styles from './orderGoodsItem.less';

class OrderGoodsItem extends React.Component {
  render() {
    return (
      <div className={styles.orderGoodsItemWrapper}>
        <Row type="flex" justify="space-around" align="middle">
          <Col span={10}>
            <Row type="flex" justify="space-around" align="middle">
              <Col span={8}>
                <img width="100" alt="" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508953487730&di=f2758e70d496d28cad02859a90a04fe7&imgtype=0&src=http%3A%2F%2Fimg002.hc360.cn%2Fy4%2FM06%2F9C%2FA9%2FwKhQiFVVmXGEBPTzAAAAAPx5M2A001.jpg" />
              </Col>
              <Col span={16}>
                <div className={styles.bagName}>
                  <div>32178071 红色登山包 xxxxxxx</div>
                  <div>尺寸 300 * 600 * 400</div>
                </div>
              </Col>
            </Row>
          </Col>
          <Col span={3}>
            <div>$ 160</div>
          </Col>
          <Col span={3}>
            <div>2</div>
          </Col>
          <Col span={3}>
            <div>$ 320</div>
          </Col>
          <Col span={5}>
            <div className={styles.orderState}>未发货</div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default connect()(OrderGoodsItem);
