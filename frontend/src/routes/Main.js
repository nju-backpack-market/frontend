/**
 * Created by paranoia on 2017/10/24.
 */
import React, { PropTypes } from 'react';
import { connect } from 'dva';
import styles from './main.css';
import Navbar from '../components/navbar/Navbar';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

function Main({ children }) {
  return (
    <div>
      <div className={styles.headerWrapper}>
        <Header />
      </div>
      <hr />
      <div className={styles.navbarWrapper}>
        <Navbar />
      </div>
      <div className={styles.content}>
        { children }
      </div>
      <Footer />
    </div>
  );
}

Main.propTypes = {
  children: PropTypes.element.isRequired,
};

export default connect()(Main);
