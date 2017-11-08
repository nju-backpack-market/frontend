/**
 * Created by paranoia on 2017/10/24.
 */
import React from 'react';
import { Layout } from 'antd';
import { connect } from 'dva';
import Header from '../components/header/Header';
import AdminContent from '../components/adminContent/AdminContent';

const Content = Layout.Content;

class Admin extends React.Component {
  render() {
    return (
      <Layout style={{ backgroundColor: 'white' }}>
        <Header />
        <Content>
          <AdminContent />
        </Content>
      </Layout>
    );
  }
}

Admin.propTypes = {
};

export default connect()(Admin);
