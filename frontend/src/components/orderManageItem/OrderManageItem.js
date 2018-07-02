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
      id: '',
      modalVisible: false,
      logisticCompany: '',
      logisticCode: '',
      logisticInputVisible: false,
      logisticInfoVisible: false,
      isModifying: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.logisticInfoSucceed !== undefined) {
      if (nextProps.logisticInfoSucceed) {
        this.setState({
          modalVisible: false,
          isModifying: false,
        });
      }
    }
  }

  onShowDetailModal = () => {
    console.log('++++++++', this.props.item);
    if (this.props.item.status === 'STOCK_OUT') {
      this.setState({
        modalVisible: true,
        logisticInputVisible: true,
        logisticInfoVisible: false,
      });
    } else {
      this.setState({
        modalVisible: true,
        logisticInputVisible: false,
        logisticInfoVisible: true,
      });
    }
  };
  onCloseDetailModal = () => {
    this.setState({
      modalVisible: false,
    });
  };
  onChangeLogisticCompany = (e) => {
    // console.log(e.target.value);
    this.setState({
      logisticCompany: e.target.value,
    });
  };
  onChangeLogisticCode = (e) => {
    // console.log(e.target.value);
    this.setState({
      logisticCode: e.target.value,
    });
  };
  onHandleDelivery(id) {
    console.log(id);
    this.props.dispatch({
      type: 'admin/fetchDelivery',
      payload: {
        logisticCompany: this.state.logisticCompany,
        logisticCode: this.state.logisticCode,
        orderId: id,
      },
    });
  }
  onHandleModifyLogistic(id, company, code) {
    console.log(id);
    console.log(company);
    console.log(code);
    this.setState({
      id,
      logisticInputVisible: true,
      logisticInfoVisible: false,
      logisticCompany: company,
      logisticCode: code,
      isModifying: true,
    });
  }
  onConfirmModify = () => {
    this.props.dispatch({
      type: 'admin/fetchDelivery',
      payload: {
        logisticCompany: this.state.logisticCompany,
        logisticCode: this.state.logisticCode,
        orderId: this.state.id,
      },
    });
  };
  render() {
    const item = this.props.item;
    console.log('item:', item);
    const createTime = item.create_time;
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
              <div>订单编号: <span style={{ fontSize: '14' }}>{item.oid}</span></div>
              <div>订单创建时间: {createTime}</div>
              <div>收货人: {item.delivery_info.customer_name}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                联系方式: {item.delivery_info.phone_number}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                邮箱: {item.delivery_info.email}</div>
              <div>收货地址: {item.delivery_info.country} {item.delivery_info.province}
                {item.delivery_info.city} {item.delivery_info.address_line1}
                {item.delivery_info.address_line2}</div>
              <div>邮编: {item.delivery_info.postal_code}</div>
            </div>
            <div style={{ display: this.state.logisticInputVisible ? 'block' : 'none' }} className={styles.inputOrderId}>
              <Row type="flex" justify="space-around" align="middle">
                <Col span={3}><div>物流公司: </div></Col>
                <Col span={21}>
                  <Input
                    value={this.state.logisticCompany}
                    onChange={this.onChangeLogisticCompany}
                    style={{ width: 220 }}
                  />
                </Col>
              </Row>
              <Row style={{ marginTop: 10 }} type="flex" justify="space-around" align="middle">
                <Col span={3}><div>物流单号: </div></Col>
                <Col span={21}>
                  <Input
                    value={this.state.logisticCode}
                    onChange={this.onChangeLogisticCode}
                    style={{ width: 220 }}
                  />
                </Col>
              </Row>
            </div>
            <div style={{ display: this.state.logisticInfoVisible ? 'block' : 'none' }} className={styles.inputOrderId}>
              <Row type="flex" justify="space-around" align="middle">
                <Col span={3}><div>物流公司: </div></Col>
                <Col span={21}>
                  <span>{item.delivery_info.logistic_company}</span>
                </Col>
              </Row>
              <Row style={{ marginTop: 10 }} type="flex" justify="space-around" align="middle">
                <Col span={3}><div>物流单号: </div></Col>
                <Col span={21}>
                  <span>{item.delivery_info.logistic_code}</span>
                </Col>
              </Row>
            </div>
            <div className={styles.orderOpreateBtn}>
              <Button style={{ display: item.status === 'STOCK_OUT' ? 'block' : 'none', float: 'right' }} onClick={() => this.onHandleDelivery(item.oid)} type="primary">发货</Button>
              <Button style={{ display: (item.status === 'DELIVERING' && !this.state.isModifying) ? 'block' : 'none', float: 'right' }} onClick={() => this.onHandleModifyLogistic(item.oid, item.delivery_info.logistic_company, item.delivery_info.logistic_code)} type="primary">修改物流信息</Button>
              <Button style={{ display: this.state.isModifying ? 'block' : 'none', float: 'right' }} onClick={this.onConfirmModify} type="primary">确认修改</Button>
            </div>
          </div>
        </Modal>
        <div>订单编号: <span style={{ fontSize: '14', fontWeight: 'bold' }}>{item.oid}</span></div>
        <div className={styles.tableTitle}>
          <Row>
            <Col span={10}>
              <span>商品名称</span>
            </Col>
            <Col span={3}><span>单价</span></Col>
            <Col span={3}><span>数量</span></Col>
            <Col span={3}><span>小计</span></Col>
            <Col span={5}><span>状态</span></Col>
          </Row>
        </div>
        <div>
          <OrderGoodsItem
            goodItem={item.shopping_list.list[0]}
            num={item.shopping_list.list.length}
            totalPrice={item.shopping_list.total_price}
            status={item.status}
          />
        </div>
        <div className={styles.tableBottomContent}>
          <Button style={{ display: item.status === 'STOCK_OUT' ? 'block' : 'none' }} type="primary" onClick={this.onShowDetailModal}>发货</Button>
          <Button style={{ visibility: item.status === 'DELIVERING' ? 'visible' : 'hidden' }} type="primary" onClick={this.onShowDetailModal}>详细信息</Button>
          {/* <Button type="primary" style={{ marginLeft: 20 }}>发货</Button>*/}
          <div className={styles.sumPrice}>
            <span>共 <span style={{ color: 'red', fontWeight: 'bold' }}>{item.shopping_list.list.length}</span> 件商品</span>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span>商品金额&nbsp;&nbsp;<span style={{ color: 'red', fontSize: '2em' }}>￥ {item.shopping_list.total_price}</span></span>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { logisticInfoSucceed } = state.admin;
  return { logisticInfoSucceed };
}

export default connect(mapStateToProps)(OrderManageItem);
