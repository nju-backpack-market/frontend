/**
 * Created by paranoia on 2017/10/26.
 */
import React from 'react';
import { connect } from 'dva';
import { Steps } from 'antd';
import styles from './OrderInfo.css';

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
          <div className={styles.headerTab0}>商品名称</div>
          <div className={styles.headerTab}>单价</div>
          <div className={styles.headerTab}>数量</div>
          <div className={styles.headerTab}>小计</div>
          <div className={styles.headerTab}>删除</div>
        </div>
        <hr />
        <div className={styles.detailContent}>
          4444
        </div>
      </div>
    </div>
  );
}

OrderInfo.propTypes = {
};

export default connect()(OrderInfo);
