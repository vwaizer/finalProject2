import React from 'react';
import { Form, Input, Button, Row, Col, Card } from 'antd';

const PaymentForm = () => {
  const onFinish = (values) => {
    console.log('Received values:', values);
    // You can handle the form submission and payment processing here.
  };

  return (
    <Row justify="center"  >
      <Col span={8}>
        <Card title="Payment Information" style={{ margin: '20px' }}>
          <Form name="payment-form" onFinish={onFinish} layout='vertical'>
            <Form.Item
              name="cardholderName"
              label="Cardholder Name"
              rules={[
                {
                  required: true,
                  message: 'Please enter the cardholder name',
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="cardNumber"
              label="Card Number"
              rules={[
                {
                  required: true,
                  message: 'Please enter the card number',
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="expirationDate"
              label="Expiration Date"
              rules={[
                {
                  required: true,
                  message: 'Please enter the expiration date',
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="cvv"
              label="CVV"
              rules={[
                {
                  required: true,
                  message: 'Please enter the CVV',
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Pay Now
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};

export default PaymentForm;
