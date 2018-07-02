/**
 * Created by wyj on 2017/10/27.
 */
import React from 'react';
import { connect } from 'dva';
import { Pagination, Checkbox, DatePicker, Input } from 'antd';
import styles from './orderManagePane.less';
import OrderManageItem from '../orderManageItem/OrderManageItem';

const RangePicker = DatePicker.RangePicker;
const Search = Input.Search;

class OrderManagePane extends React.Component {

  onChangeDate = (date, dateString) => {
    console.log(date);
    console.log(dateString);
  };

  render() {
    console.log('Orders-----', this.props.allOrders);
    return (
      <div className={styles.orderManagePaneWrapper}>
        {/* <div>*/}
        {/* <Checkbox>待发货</Checkbox>*/}
        {/* <Checkbox>待发货</Checkbox>*/}
        {/* <Checkbox>待发货</Checkbox>*/}
        {/* <Search*/}
        {/* placeholder="订单号"*/}
        {/* style={{ width: 250 }}*/}
        {/* onSearch={value => console.log(value)}*/}
        {/* />*/}
        {/* </div>*/}
        {/* <RangePicker />*/}
        <div>
          {this.props.allOrders.map((item) => {
            return <OrderManageItem key={item.oid} item={item} />;
          })}
        </div>
        {/* <Pagination />*/}
      </div>
    );
  }
}

export default connect()(OrderManagePane);
