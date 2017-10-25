/**
 * Created by paranoia on 2017/10/24.
 */
import React from 'react';
import { connect } from 'dva';

function ItemInfo() {
  return (
    <div>
      <h1>商品详细信息</h1>
      <ul>
        <p>这是一个很好的包</p>
      </ul>
    </div>
  );
}

ItemInfo.propTypes = {
};

export default connect()(ItemInfo);
