/**
 * Created by paranoia on 2017/10/24.
 */
import React from 'react';
import { connect } from 'dva';
import { Carousel } from 'antd';
import ItemList from '../components/itemList/ItemList';
import styles from './homepage.css';

function Homepage() {
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
      <hr/>
      <div className={styles.contentWrapper}>
        <ItemList/>
      </div>
    </div>
  );
}

Homepage.propTypes = {
};

export default connect()(Homepage);
