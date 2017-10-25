/**
 * Created by paranoia on 2017/10/24.
 */
import React, { PropTypes } from 'react';
import { connect } from 'dva';
import styles from './main.css';
import Navbar from '../components/Navbar';
import Header from '../components/Header';

function Main({ children }) {
  return (
    <div>
      <p>我就是在配路由</p>
      <ul>
        <Header />
        <Navbar />
      </ul>
      <div className={styles.content}>
        { children }
      </div>
      <p>管理的路由：'/admin'</p>
    </div>
  );
}

Main.propTypes = {
  children: PropTypes.element.isRequired,
};

export default connect()(Main);
