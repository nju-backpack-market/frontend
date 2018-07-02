import React from 'react';
import { connect } from 'dva';
import { Input, Button, Pagination } from 'antd';
import GoodsManageItem from '../goodsManageItem/GoodsManageItem';
import styles from './goodsManagePane.less';

const Search = Input.Search;

class GoodsManagePane extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
    };
  }
  onClickAddNewItem = () => {
    window.location.href = '/admin-newPack';
  };
  onChangePage = (page) => {
    this.setState({
      currentPage: page,
    });
  };
  render() {
    console.log(this.props.productsList);
    return (
      <div className={styles.goodsListWrapper}>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button type="primary" onClick={this.onClickAddNewItem}>添加商品</Button>
          <Search
            placeholder="商品编号"
            style={{ width: 200, marginLeft: 50 }}
          />
        </div>
        <div className={styles.goodsList}>
          {this.props.productsList.length === 0 ? '' : this.props.productsList.map(product => <GoodsManageItem key={product.pid} productInfo={product} />)}
        </div>
        <Pagination onChange={this.onChangePage} current={this.state.currentPage} pageSize={this.props.itemSize} total={this.props.totalItem} style={{ float: 'right' }} />
      </div>
    );
  }
}

export default connect()(GoodsManagePane);
