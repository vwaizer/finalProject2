import React, { useContext, useRef, useState } from 'react';
import { Form, Input, Button, Radio, Typography } from 'antd';
import { DataContext } from '../App';
import { Des, ProductImage } from './Cart';
import styled from 'styled-components';
import Footer from '../component/Footer/Footer';
import { useNavigate } from 'react-router';
import PayPrice from '../component/layout/PayPrice';
const { Text } = Typography;
export const Title = styled.h2`
  margin-top: 7px;
  margin-bottom: 0px;
  font-size: 17px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: lighter;
  color: #333333;
  display: inline-block;
`;
const ScrollableContainer = styled.div`
  width: 300px;
  margin-top: 10px;
  max-height: 200px;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: gray lightgray;
`;
const NameBrand = styled.h2`
  color: #333333;
  text-align: center;
  margin-top: 70px;
`;
const AmountBlock = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 0px;
`;
const PayMethod = styled.p`
  color: grey;
  font-size: 16px;
  display: inline-block;
  margin: auto 7px;
`;
const MethodAndPay = styled.div`
  display: flex; 
  justify-content: space-around;
  margin-bottom:30px; 
`
const PaymentForm = () => {
  const initialForm = {
    name: '',
    phone: '',
    address: '',
    email: '',
  };

  const [infoForm, setForm] = useState(initialForm);
  const [radioChecked, setRadioChecked] = useState(false);
  const { name, phone, address, email } = infoForm;
  let cartData = JSON.parse(window.localStorage.getItem('cartData'));
  const tmp = useContext(DataContext);
  let dataBase = cartData.data;

  // console.log(dataBase)
  const onFinish = (values) => {
    console.log('Received values:', values);
    //   You can handle the form submission and payment processing here.
  };
  const checkRadioChecked = () => {
    setRadioChecked(radioRef.current.checked);
  };
  const radioRef = useRef(null);
  const handleChange = (key, event) => {
    const value = event.target.value;
    setForm({ ...infoForm, [key]: value });
    // console.log(key, event)
  };
  const naPage = useNavigate();
  const onClickButton = () => {
    if (!name || !email || !address || Number(phone) < 0) {
      alert('Invalid content');
    } else if (radioChecked === false) {
      alert('Please select a payment method.');
      return;
    } else {
      alert('Success,Please wait in 3 seconds');
      window.localStorage.setItem('cartData', JSON.stringify({ data: [] }));
      setTimeout(() => {
        naPage(`/`);
        // console.log(nextPage);
      }, 3000);
    }
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
      <NameBrand>KONSEPT HOMEPLUS</NameBrand>
      <div style={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap' }}>
        <div>
          <Title style={{ fontSize: '20px' }}>Delivery information </Title>
          <Form
            style={{ marginTop: '20px' }}
            name="payment-form"
            onFinish={onFinish}
            layout="vertical"
          >
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
                onChange={(e) => handleChange('name', e)}
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
                onChange={(e) => handleChange('phone', e)}
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
                onChange={(e) => handleChange('address', e)}
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
                placeholder="Your email"
                onChange={(e) => handleChange('email', e)}
              />
            </Form.Item>
          </Form>
        </div>

        <div>
          <Title style={{ fontSize: '20px' }}>Products</Title>

          <ScrollableContainer>
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
                    <AmountBlock>
                      <Text style={{ paddingLeft: '5px' }}>${price}</Text>
                      <Text>x{amount}</Text>
                    </AmountBlock>
                  </div>
                </div>
              );
            })}
          </ScrollableContainer>
          <hr style={{ color: '#333333', width: '100%', marginTop: '15px' }}></hr>

          <PayPrice title="Provisional invoice" price={toTalProduct()} />
          <PayPrice title="Transport fee" price="5.00" />
          <PayPrice title="ToTal" price={(toTalProduct() + 5.0).toFixed(4)} />
        </div>
      </div>

      <MethodAndPay >
        <div >
          <Title style={{ fontSize: '20px' }}>Payment methods:</Title>
          <br></br>
          <Radio onClick={checkRadioChecked} ref={radioRef}>
            <div style={{ display: 'flex' }}>
              <div style={{ margin: 'auto' }}>
                <img src="https://hstatic.net/0/0/global/design/seller/image/payment/cod.svg?v=6" />
              </div>
              <PayMethod>Cash On Delivery (COD)</PayMethod>
            </div>
          </Radio>
        </div>
        <div>
          <Button
            type="primary"
            style={{ minWidth: '300px', marginTop: '10px', height: '45px', fontSize: '17px' }}
            onClick={() => {
              onClickButton();
            }}
          >
            PAY NOW
          </Button>
        </div>
      </MethodAndPay>
      <Footer/>
    </>
  );
};

export default PaymentForm;
