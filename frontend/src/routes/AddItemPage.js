/**
 * Created by wyj on 2017/11/14.
 */
import React from 'react';
import { connect } from 'dva';
import { Layout } from 'antd';
import Header from '../components/header/Header';
import AddItemContent from '../components/addItemContent/AddItemContent';

const Content = Layout.Content;

class AddItemPage extends React.Component {
  render() {
    return (
      <Layout style={{ backgroundColor: 'white', minHeight: '100%' }}>
        <Header />
        <Content>
          <AddItemContent />
        </Content>
      </Layout>
    );
  }
}

export default connect()(AddItemPage);
