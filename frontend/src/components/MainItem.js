/**
 * Created by paranoia on 2017/10/24.
 */
import React from 'react';
import { Link } from 'dva/router'

const MainItem = () => {
  return (
    <div>
      <Link to={'/item'}> {'这是一个商品'}</Link>
    </div>
  );
};

MainItem.propTypes = {
};

export default MainItem;
