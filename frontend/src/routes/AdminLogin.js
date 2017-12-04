/**
 * Created by wyj on 2017/11/16.
 */
import React from 'react';
import { connect } from 'dva';
import { Layout } from 'antd';
import Header from '../components/header/Header';
import AdminLoginContent from '../components/adminLoginContent/AdminLoginContent';

const Content = Layout.Content;

class AdminLogin extends React.Component {
  render() {
    return (
      <Layout style={{ backgroundColor: 'white', height: '100%' }}>
        <Header />
        <Content>
          <AdminLoginContent />
        </Content>
      </Layout>
    );
  }
}

export default connect()(AdminLogin);
