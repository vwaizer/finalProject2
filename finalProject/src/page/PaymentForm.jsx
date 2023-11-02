import React, { useContext } from 'react';
import { Form, Input, Button, Radio, Typography } from 'antd';
import { DataContext } from '../App';
import { Des, ProductImage } from './Cart';
import styled from 'styled-components';
const { Text } = Typography;
const Title = styled.h2`
  margin-top: 7px;
  margin-bottom: 0px;
  font-size: 17px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: lighter;
  color: #333333;
  display: inline-block;
`;
const ScrollableContainer = styled.div`
  max-height: 200px;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: gray lightgray;
`;
const PaymentForm = () => {
  let cartData = JSON.parse(window.localStorage.getItem('cartData'));
  const tmp = useContext(DataContext);
  let dataBase = cartData.data;
  // console.log(dataBase)
  const onFinish = (values) => {
    console.log('Received values:', values);
    // You can handle the form submission and payment processing here.
  };

  const toTalProduct = () => {
    const sum = dataBase.reduce((total, item) => {
      let productAmount;
      if (item.hasOwnProperty('discount')) {
        productAmount = item.discount * item.amount;
      } else {
        productAmount = item.price * item.amount;
      }
      return total + productAmount;
    }, 0);
    return sum;
  };
  return (
    <>
      <h2 style={{ color: '#333333', marginLeft:'240px' }}>KONSEPT HOMEPLUS</h2>
      <div style={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap'}}>
        <div>
          <Title style={{fontSize:'20px'}}>Delivery information </Title>
          <Form style={{marginTop:'20px'}} name="payment-form" onFinish={onFinish} layout="vertical">
            <Form.Item
              name="cardholderName"
              rules={[
                {
                  required: true,
                  message: 'Please Enter Name',
                },
                {
                  pattern: /^[A-Za-z\s]+$/,
                  message: 'Please enter letters only',
                },
              ]}
            >
              <Input
                style={{ width: '500px', height: '45px' }}
                spellCheck="false"
                placeholder="Your name"
              />
            </Form.Item>
            <Form.Item
              name="phone"
              rules={[
                {
                  required: true,
                  message: 'Please Enter the phone number',
                },
                {
                  pattern: /^[0-9]+$/,
                  message: 'Please Enter a valid phone number',
                },
              ]}
            >
              <Input
                style={{ width: '500px', height: '45px' }}
                spellCheck="false"
                placeholder="Phone number"
              />
            </Form.Item>
            <Form.Item
              name="address"
              rules={[
                {
                  required: true,
                  message: 'Please Enter your address',
                },
              ]}
            >
              <Input
                style={{ width: '500px', height: '45px' }}
                spellCheck="false"
                placeholder="Your address"
              />
            </Form.Item>
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: 'Please Enter your email',
                },
              ]}
            >
              <Input
                type="email"
                style={{ width: '500px', height: '45px' }}
                spellCheck="false"
                placeholder="Your address"
              />
            </Form.Item>

          </Form>
        </div>

        <div>
          <Title style={{fontSize:'20px'}}>Products</Title>

          <ScrollableContainer style={{ width: '300px',marginTop:'10px' }}>
            {dataBase.map((item) => {
              const { id, images, title, amount, price } = item;
              return (
                <div
                  key={id}
                  style={{ display: 'flex', alignItems: 'center', margin: '10px auto' }}
                >
                  <ProductImage
                    style={{ width: '60px', height: '60px', cursor: 'auto' }}
                    src={images}
                    alt=""
                  />
                  <div style={{ width: '200px' }}>
                    <Des
                      style={{ fontSize: '14px', cursor: 'auto', padding: ' 5px', margin: '0px' }}
                    >
                      {title}
                    </Des>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        paddingTop: '0px',
                      }}
                    >
                      <Text style={{ paddingLeft: '5px' }}>${price}</Text>
                      <Text>x{amount}</Text>
                    </div>
                  </div>
                </div>
              );
            })}
          </ScrollableContainer>
          <hr style={{ color: '#333333', width: '100%', marginTop: '15px' }}></hr>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Title>Provisional invoice</Title>
            <div style={{ padding: 'auto' }}>
              <Text style={{ fontSize: '16px', fontWeight: 'bold', color: '#a73340' }}>
                ${toTalProduct()}
              </Text>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Title>Transport fee</Title>
            <div>
              <Text style={{ fontSize: '16px', fontWeight: 'bold', color: '#a73340' }}>$5.00</Text>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Title>ToTal</Title>
            <div>
              <Text style={{ fontSize: '16px', fontWeight: 'bold', color: '#a73340' }}>
                ${(toTalProduct() + 5.0).toFixed(4)}
              </Text>
            </div>
          </div>
        </div>
      </div>

      <div style={{display:'flex', justifyContent:'space-around'}}>
        <div style={{marginTop:'-10px'}}>
        <Title style={{ fontSize: '20px'}}>Payment methods:</Title><br></br>
        <Radio>
          <div style={{ display: 'flex' }}>
            <div style={{ margin: 'auto' }}>
              <img src="https://hstatic.net/0/0/global/design/seller/image/payment/cod.svg?v=6" />
            </div>
            <p
              style={{
                color: 'grey',
                fontSize: '16px',
                display: 'inline-block',
                margin: 'auto 7px',
              }}
            >
              Cash On Delivery (COD)
            </p>
          </div>
        </Radio>
        </div>
    <div>
      <Button  type="primary" style={{minWidth:'300px', marginTop:'10px', height:'45px', fontSize:'17px'}}>PAY NOW</Button>
    </div>
      </div>
    </>
  );
};

export default PaymentForm;
