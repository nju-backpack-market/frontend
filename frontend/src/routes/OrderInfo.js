/**
 * Created by paranoia on 2017/10/26.
 */
import React from 'react';
import { connect } from 'dva';
import { Steps, Input, Button, Form } from 'antd';
import styles from './OrderInfo.css';
import OrderItem from '../components/shoppingPageOrderItem/OrderItem';

function OrderInfo() {
  const Step = Steps.Step;
  const FormItem = Form.Item;

  class RegistrationForm extends React.Component {
    handleSubmit = (e) => {
      e.preventDefault();
      this.props.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    }

    render() {
      const { getFieldDecorator } = this.props.form;
      const formItemLayout = {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 6 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 14 },
        },
      };

      return (
        <Form onSubmit={this.handleSubmit}>
          <div className={styles.userInfo}>
            <div className={styles.userHeader}>
              DELIVERED INFORMATION
            </div>
            <hr />
            <div className={styles.userDetailContent}>
              <FormItem
                className={styles.clientName}
                {...formItemLayout}
                label={(
                  <span>Name&nbsp;</span>
                )}
                hasFeedback
              >
                {getFieldDecorator('name', {
                  rules: [{ required: true, message: 'Please input your name!', whitespace: true }],
                })(
                  <Input />,
                )}
              </FormItem>
              <FormItem
                className={styles.clientAddress}
                {...formItemLayout}
                label={(
                  <span>Address&nbsp;</span>
                )}
                hasFeedback
              >
                {getFieldDecorator('address', {
                  rules: [{ required: true, message: 'Please input your address!', whitespace: true }],
                })(
                  <Input />,
                )}
              </FormItem>
              <FormItem
                className={styles.clientPhone}
                {...formItemLayout}
                label={(
                  <span>Phone&nbsp;</span>
                )}
                hasFeedback
              >
                {getFieldDecorator('phone', {
                  rules: [{ required: true, message: 'Please input your phone!', whitespace: true }],
                })(
                  <Input />,
                )}
              </FormItem>
            </div>
          </div>
          <div className={styles.confirmWrapper}>
            <FormItem>
              <Button type="primary" htmlType="submit">Confirm</Button>
            </FormItem>
          </div>
        </Form>
      );
    }
  }

  const WrappedRegistrationForm = Form.create()(RegistrationForm);
  return (
    <div className={styles.contentWrapper}>
      <div className={styles.progressBar}>
        <Steps current={0}>
          <Step title="Finished" description="Confirm your order." />
          <Step title="In Progress" description="This is a description." />
          <Step title="Waiting" description="This is a description." />
        </Steps>
      </div>
      <div className={styles.orderDetail}>
        <div className={styles.detailHeader}>
          <div className={styles.headerTab0}>ITEM NAME</div>
          <div className={styles.headerTab}>UNIT PRICE</div>
          <div className={styles.headerTab}>QUANTITY</div>
          <div className={styles.headerTab}>TOTAL</div>
          <div className={styles.headerTab}>DELETE</div>
        </div>
        <hr />
        <div className={styles.detailContent}>
          <OrderItem id="001"/>
          <OrderItem id="002"/>
          <OrderItem id="003"/>
        </div>
      </div>
      <WrappedRegistrationForm />
    </div>
  );
}

OrderInfo.propTypes = {
};

export default connect()(OrderInfo);
