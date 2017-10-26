/**
 * Created by paranoia on 2017/10/24.
 */
import React from 'react';
import { Link } from 'dva/router';
import { Button } from 'antd';
import styles from './mainItem.css';

const MainItem = () => {
  return (
    <div className={styles.itemWrapper}>
      <div className={styles.itemPic}>
        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508953487730&di=f2758e70d496d28cad02859a90a04fe7&imgtype=0&src=http%3A%2F%2Fimg002.hc360.cn%2Fy4%2FM06%2F9C%2FA9%2FwKhQiFVVmXGEBPTzAAAAAPx5M2A001.jpg" alt="" width="225" />
      </div>
      <div className={styles.details}>
        <div>AETHER AG™ 70 WITH RAINCOVER</div>
        <div>CNY2,799.00</div>
      </div>
      <Link to={'/item'}>
        <Button type="primary">BUY NOW</Button>
      </Link>
    </div>
  );
};

MainItem.propTypes = {
};

export default MainItem;
