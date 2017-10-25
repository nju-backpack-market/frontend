/**
 * Created by paranoia on 2017/10/24.
 */
import React from 'react';
import styles from './navbar.css';

const Navbar = () => {
  return (
    <div>
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
  );
};

Navbar.propTypes = {
};

export default Navbar;
