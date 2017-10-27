/**
 * Created by paranoia on 2017/10/24.
 */
import React from 'react';
import styles from './header.css';
import zh_CN from '../../utils/zh_CN';
import en_US from '../../utils/en_US';
import intl from 'intl';

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
