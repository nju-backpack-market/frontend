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
      <Link to={'/item'}>
        <Button type="primary">BUY NOW</Button>
      </Link>
    </div>
  );
};

MainItem.propTypes = {
};

export default MainItem;
