/**
 * Created by paranoia on 2017/10/24.
 */
import React from 'react';
import { Input } from 'antd';
import styles from './navbar.css';

const Navbar = () => {
  const Search = Input.Search;
  return (
    <div className={styles.navWrapper}>
      <div className={styles.navItem}>
        <div className={styles.tab}>
          <div className={styles.tabItem}>
            HOME
          </div>
          <div className={styles.tabItem}>
            TAB2
          </div>
          <div className={styles.tabItem}>
            TAB3
          </div>
          <div className={styles.tabItem}>
            TAB4
          </div>
          <div className={styles.tabItem}>
            TAB5
          </div>
        </div>
      </div>
      <div className={styles.input}>
        <Search
          placeholder="Input Item Name"
          style={{ width: 250 }}
          onSearch={value => console.log(value)}
        />
      </div>
      <div className={styles.cart}>
        购物车
      </div>
    </div>
  );
};

Navbar.propTypes = {
};

export default Navbar;
