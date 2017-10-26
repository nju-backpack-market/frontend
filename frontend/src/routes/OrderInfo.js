/**
 * Created by paranoia on 2017/10/26.
 */
import React from 'react';
import { connect } from 'dva';
import { Steps, Input, Button } from 'antd';
import styles from './OrderInfo.css';
import OrderItem from '../components/orderItem/OrderItem';

function OrderInfo() {
  const Step = Steps.Step;
  return (
    <div className={styles.contentWrapper}>
      <div className={styles.progressBar}>
        <Steps current={0}>
          <Step title="Finished" description="Confirm your order." />
          <Step title="In Progress" description="This is a description." />
          <Step title="Waiting" description="This is a description." />
        </Steps>
      </div>
      <div className={styles.orderDetail}>
        <div className={styles.detailHeader}>
          <div className={styles.headerTab0}>ITEM NAME</div>
          <div className={styles.headerTab}>UNIT PRICE</div>
          <div className={styles.headerTab}>QUANTITY</div>
          <div className={styles.headerTab}>TOTAL</div>
          <div className={styles.headerTab}>DELETE</div>
        </div>
        <hr />
        <div className={styles.detailContent}>
          <OrderItem />
          <OrderItem />
          <OrderItem />
        </div>
      </div>
      <div className={styles.userInfo}>
        <div className={styles.userHeader}>
          DELIVERED INFORMATION
        </div>
        <hr />
        <div className={styles.detailContent}>
          <div className={styles.clientName}>
            <span>Name</span>
            <Input placeholder="" />
          </div>
          <div className={styles.clientAddress}>
            <span>Address</span>
            <Input placeholder="" />
          </div>
          <div className={styles.clientPhone}>
            <span>Phone</span>
            <Input placeholder="" />
          </div>
        </div>
      </div>
      <div className={styles.confirmWrapper}>
        <Button type="primary">CONFIRM</Button>
      </div>
    </div>
  );
}

OrderInfo.propTypes = {
};

export default connect()(OrderInfo);
