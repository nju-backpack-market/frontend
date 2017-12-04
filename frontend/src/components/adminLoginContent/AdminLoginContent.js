/**
 * Created by wyj on 2017/11/16.
 */
import React from 'react';
import { connect } from 'dva';
import { Form, Icon, Input, Button } from 'antd';
import styles from './adminLoginContent.less';

const FormItem = Form.Item;

class AdminLoginContent extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log(values);
        this.props.dispatch({
          type: 'admin/fetchAdminLogin',
          payload: JSON.parse(JSON.stringify(values)),
        });
      }
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className={styles.adminLoginContentWrapper}>
        <div className={styles.loginForm}>
          <div className={styles.userTypeTitle}>Admin</div>
          <Form onSubmit={this.handleSubmit}>
            <FormItem>
              {getFieldDecorator('username', {
                rules: [{ required: true, message: 'Please input your username!' }],
              })(
                <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />,
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your password!' }],
              })(
                <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} placeholder="Password" type="password" />,
              )}
            </FormItem>
            <FormItem>
              <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                Login
              </Button>
            </FormItem>
          </Form>
        </div>
      </div>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(AdminLoginContent);

export default connect()(WrappedNormalLoginForm);
