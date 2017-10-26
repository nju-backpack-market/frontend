/**
 * Created by paranoia on 2017/10/24.
 */
import React from 'react';
import { connect } from 'dva';
import styles from './itemInfo.css';
import ItemDes from '../components/itemDes/ItemDes';
import ItemSale from '../components/itemSale/ItemSale';

function ItemInfo() {
  return (
    <div>
      <div className={styles.infoArea}>
        <ItemSale />
      </div>
      <hr />
      <div className={styles.DesArea}>
        <ItemDes />
      </div>
    </div>
  );
}

ItemInfo.propTypes = {
};

export default connect()(ItemInfo);
