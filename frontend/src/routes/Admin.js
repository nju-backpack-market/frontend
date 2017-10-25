/**
 * Created by paranoia on 2017/10/24.
 */
import React from 'react';
import { connect } from 'dva';

function Admin() {
  return (
    <div>
      <h1>管理的地方，只是在配路由</h1>
      <ul>
        <p>管理信息</p>
      </ul>
    </div>
  );
}

Admin.propTypes = {
};

export default connect()(Admin);
