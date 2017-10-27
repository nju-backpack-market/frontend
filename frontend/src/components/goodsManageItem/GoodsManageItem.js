import React from 'react';
import { connect } from 'dva';
import { Button, Icon } from 'antd';
import styles from './goodsManageItem.less';

class GoodsManageItem extends React.Component {
  render() {
    return (
      <div className={styles.goodsManageItem}>
        <div className={styles.bagPic}>
          <img width="225" alt="" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508953487730&di=f2758e70d496d28cad02859a90a04fe7&imgtype=0&src=http%3A%2F%2Fimg002.hc360.cn%2Fy4%2FM06%2F9C%2FA9%2FwKhQiFVVmXGEBPTzAAAAAPx5M2A001.jpg" />
        </div>
        <div>
          <div className={styles.goodsName}>RED BACKPACK</div>
          <div className={styles.delBtnWrapper}>
            <Button className={styles.delBtn}><Icon type="delete" /></Button>
          </div>
          <div className={styles.priceSection}>
            <span className={styles.currentPrice}>$ 160.00</span>
            <span className={styles.previousPrice}>$ 199.00</span>
          </div>
          <Button className={styles.editBtn} type="primary">编辑商品信息</Button>
        </div>
      </div>
    );
  }
}

export default connect()(GoodsManageItem);
