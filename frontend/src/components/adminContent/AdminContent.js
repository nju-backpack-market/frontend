/**
 * Created by wyj on 2017/11/8.
 */
import React from 'react';
import { connect } from 'dva';
import { Tabs } from 'antd';
import styles from './adminContent.less';
import OrderMangePane from '../orderManagePane/OrderManagePane';
import GoodsManagePane from '../goodsManagePane/GoodsManagePane';

const TabPane = Tabs.TabPane;

class AdminContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabIndex: '1',
    };
  }
  onChangeTab = (key) => {
    this.setState({
      tabIndex: key,
    });
  };
  render() {
    console.log(this.props);
    return (
      <div className={styles.tabNav}>
        <Tabs
          activeKey={this.state.tabIndex}
          onChange={this.onChangeTab}
        >
          <TabPane tab="订单管理" key="1">
            <OrderMangePane allOrders={this.props.allOrders} />
          </TabPane>
          {/* <TabPane tab="商品管理" key="2">*/}
          {/* <GoodsManagePane*/}
          {/* productsList={this.props.productsList}*/}
          {/* totalItemPage={this.props.totalItem}*/}
          {/* itemSize={this.props.itemSize}*/}
          {/* />*/}
          {/* </TabPane>*/}
        </Tabs>
      </div>
    );
  }
}

export default connect()(AdminContent);
