/**
 * Created by wyj on 2017/11/13.
 */
import React from 'react';
import { connect } from 'dva';
// import { Icon } from 'antd';
import styles from './addGoodsBtn.less';

class AddGoodsBtn extends React.Component {
  render() {
    return (
      <div className={styles.addGoodsBtnWrapper}>
        { /* <Icon type="plus-circle-o" /> */ }
      </div>
    );
  }
}

export default connect()(AddGoodsBtn);
