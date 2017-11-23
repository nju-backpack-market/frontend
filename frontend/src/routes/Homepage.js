/**
 * Created by paranoia on 2017/10/24.
 */
import React from 'react';
import { connect } from 'dva';
import { Carousel, Input, Modal, Button } from 'antd';
import ItemList from '../components/homepageItemList/ItemList';
import styles from './homepage.css';

class OrderMessageBox extends React.Component {
  state = { visible: false }
  showModal = () => {
    this.setState({
      visible: true,
    });
  };
  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };
  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  searchOrderInfo = (value) => {
    console.log(value);

    this.showModal();
  };

  render() {
    const Search = Input.Search;
    return (
      <div>
        <Search
          placeholder="Input Your Order ID"
          style={{ width: 300 }}
          onSearch={value => this.searchOrderInfo(value)}
        />
        <Modal
          title="订单详情"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>订单编号: </p>
          <p>订单创建时间: </p>
          <p>收货人: </p>
          <p>联系方式: </p>
          <p>收货地址: </p>
          <br />
          <p>订单编号: </p>

        </Modal>
      </div>
    );
  }
}

function Homepage({ dispatch }) {

  function test() {
    dispatch({
      type: 'products/getAll',
    });
  }

  return (
    <div className={styles.mainContent}>
      <div className={styles.carouselWrapper}>
        <Carousel autoplay>
          <div><h3>1</h3></div>
          <div><h3>2</h3></div>
          <div><h3>3</h3></div>
          <div><h3>4</h3></div>
        </Carousel>
      </div>
      <div className={styles.logistics}>
        <div className={styles.logisticsWrapper}>
          <div>Logistics information query</div>
          <div className={styles.logisticsInput}>
            <OrderMessageBox />
          </div>
        </div>
      </div>
      <div className={styles.logistics2} />
      <hr />
      <div className={styles.contentWrapper}>
        <ItemList />
      </div>
      <Button type="primary" onClick={test} />
    </div>
  );
}

Homepage.propTypes = {
};

export default connect()(Homepage);
