/**
 * Created by paranoia on 2017/10/24.
 */
import React, { PropTypes } from 'react';
import { connect } from 'dva';
import { Button } from 'antd';
import {IntlProvider, FormattedMessage} from 'react-intl';
import fetch from 'dva/fetch';
import styles from './main.css';
import Navbar from '../components/navbar/Navbar';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';


import zhCN from '../locale/zh_CN';
import enUS from '../locale/en_US';

function Main({ children }) {

  const messages = {};
  messages['en-US'] = enUS;
  messages['zh-CN'] = zhCN;

  const languages = navigator.languages;
  const currentLang = languages[0];
  console.log('languages: ', languages);
  console.log('language: ', currentLang);

  function testData() {
    fetch('api/products', {                       // 发送请求
      method: 'GET',                            // 请求方式    (可以自己添加header的参数)
      mode: 'cors', // 避免cors攻击
      credentials: 'include',
    }).then((response) => {
      // 打印返回的json数据
      response.json().then((data) => {      // 将response进行json格式化
        console.log(data);                        // 打印
      });
    }).catch((e) => {
      console.log(e.message);
    });
  }

  function chooseLocale(){
    switch (navigator.language.split('_')[0]) {
      case 'en':
        return 'enUS';
      case 'zh': case 'zh_CN':
        return 'zhCN';
      default:
        return 'enUS';
    }
  }

  return (
    <div>
      {/*<IntlProvider locale={navigator.language} messages={chooseLocale()}>*/}
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
        <div>
          {/*<FormattedMessage*/}
            {/*id="hello"*/}
            {/*defaultMessage="React Intl Translations Example"*/}
          {/*/>*/}
        </div>
        {/*<Button onClick={testData} type="primary" />*/}
        <Footer />
      {/*</IntlProvider> */}
    </div>
  );
}

Main.propTypes = {
  children: PropTypes.element.isRequired,
};

export default connect()(Main);
