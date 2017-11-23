/**
 * Created by paranoia on 2017/10/26.
 */
import React from 'react';
import { Icon, Button } from 'antd';
import styles from './oderItem.css';

class OrderItem extends React.Component {
  props = {
    id: 'Hello',
  }

  deleteItem() {
    console.log(this.props.id);
    // document.removeChild(document.getElementById(this.props.id));
  }

  render() {
    const picSrc = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508953487730&di=f2758e70d496d28cad02859a90a04fe7&imgtype=0&src=http%3A%2F%2Fimg002.hc360.cn%2Fy4%2FM06%2F9C%2FA9%2FwKhQiFVVmXGEBPTzAAAAAPx5M2A001.jpg';

    return (
      <div>
        <div className={styles.itemWrapper}>
          <div className={styles.itemTab0}>
            <div className={styles.itemPic}>
              <img src={picSrc} alt="" width="80"/>
            </div>
            <div className={styles.itemName}>
              AETHER AG™ 70 WITH RAINCOVER
            </div>
          </div>
          <div className={styles.itemTab}>
            CNY2,799.00
          </div>
          <div className={styles.itemTab}>
            11
          </div>
          <div className={styles.itemTab}>
            11
          </div>
          <div className={styles.itemTab}>
            <Button className={styles.deleteButton} onClick={this.deleteItem}><Icon type="delete"/></Button>
          </div>
        </div>
        <hr />
      </div>
    );
  }
};

OrderItem.propTypes = {
};

export default OrderItem;
