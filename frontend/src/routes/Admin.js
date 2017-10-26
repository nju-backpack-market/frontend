/**
 * Created by paranoia on 2017/10/24.
 */
import React from 'react';
import { Layout, Tabs } from 'antd';
import { connect } from 'dva';
import Header from '../components/header/Header';
import styles from './admin.less';
import GoodsManagePane from '../components/goodsManagePane/GoodsManagePane';
import GoodsManageItem from '../components/goodsManageItem/GoodsManageItem';


const Content = Layout.Content;
const TabPane = Tabs.TabPane;

function Admin() {
  return (
    <Layout style={{ backgroundColor: 'white' }}>
      <Header />
      <Content>
        <div className={styles.tabNav}>
          <Tabs
            defaultKey={1}
          >
            <TabPane tab="订单管理" key={1}>
              <GoodsManageItem />
            </TabPane>
            <TabPane tab="商品管理" key={2}>
              <GoodsManagePane />
            </TabPane>
          </Tabs>
        </div>
      </Content>
    </Layout
    >);
}

Admin.propTypes = {
};

export default connect()(Admin);
