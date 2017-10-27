/**
 * Created by paranoia on 2017/10/26.
 */
import React from 'react';
import { Button } from 'antd';
import { Link } from 'dva/router';
import styles from './itemSale.css';

const ItemSale = () => {
  const intro = 'Winner of Outside Magazine\'s Gear of the Year Award for 2017, the Aether AG™ 70 is the perfect backpacking solution when your primary concerns are carrying heavy loads in ventilated comfort for bigger trips and weeklong-plus excursions.Now featuring our innovative Anti-Gravity™ technology and custom fit along with an incredibly robust feature set and a top lid that converts to a functional daypack or summit pack.';
  const picSrc = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508953487730&di=f2758e70d496d28cad02859a90a04fe7&imgtype=0&src=http%3A%2F%2Fimg002.hc360.cn%2Fy4%2FM06%2F9C%2FA9%2FwKhQiFVVmXGEBPTzAAAAAPx5M2A001.jpg';
  return (
    <div>
      <div className={styles.itemPic}>
        <img src={picSrc} alt="" width="400" />
      </div>
      <div className={styles.details}>
        <div className={styles.generalInfo}>
          <div>AETHER AG™ 70 WITH RAINCOVER</div>
          <div>{ intro }</div>
        </div>
        <hr />
        <div className={styles.cartButton}>
          <Button type="primary">ADD TO CART</Button>
        </div>
        <div className={styles.buyButton}>
          <Link to={'/shopping'}>
            <Button type="primary">BUY NOW</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

ItemSale.propTypes = {
};

export default ItemSale;
