/**
 * Created by wyj on 2017/10/27.
 */
import React from 'react';
import { connect } from 'dva';
import { Row, Col, Button, Modal, Input } from 'antd';
import OrderGoodsItem from './OrderGoodsItem';
import SimpleOrderManageItem from './SimpleOrderManageItem';
import styles from './orderMangeItem.less';

class OrderManageItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
    };
  }
  onShowDetailModal = () => {
    this.setState({
      modalVisible: true,
    });
  };
  onCloseDetailModal = () => {
    this.setState({
      modalVisible: false,
    });
  };
  render() {
    return (
      <div className={styles.orderManageItemWrapper}>
        <Modal
          width={600}
          title="订单详情"
          footer={[]}
          visible={this.state.modalVisible}
          onCancel={this.onCloseDetailModal}
        >
          <div className={styles.orderDetailWrapper}>
            <div className={styles.customerInfo}>
              <div>订单编号: 2017092032178071</div>
              <div>订单创建时间: 2017-10-30 20:33:13</div>
              <div>收货人: Paranoia Sun&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;联系方式: 11111111111</div>
              <div>收货地址: 江苏省南京市鼓楼区南京大学鼓楼校区</div>
            </div>
            <SimpleOrderManageItem />
            <div className={styles.inputOrderId}>
              <Row type="flex" justify="space-around" align="middle">
                <Col span={3}><div>物流单号: </div></Col>
                <Col span={21}>
                  <Input
                    style={{ width: 220 }}
                  />
                </Col>
              </Row>
            </div>
            <div className={styles.orderOpreateBtn}>
              <Button style={{ marginRight: 10 }}>取消订单</Button>
              <Button type="primary">发货</Button>
            </div>
          </div>
        </Modal>
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
          <Button type="primary" onClick={this.onShowDetailModal}>详细信息</Button>
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
