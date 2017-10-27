/**
 * Created by paranoia on 2017/10/24.
 */
import React from 'react';
import styles from './header.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headerLine}>
        <div className={styles.headerLineContent}>
          这是一个header
        </div>
      </div>
      <div className={styles.logo} />
    </div>
  );
};

Header.propTypes = {
};

export default Header;
