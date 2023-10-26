import React, { useState } from 'react';
import Layout from '../component/layout/Layout';
import styled from 'styled-components';
import { Typography } from 'antd';
import axios from 'axios';

const { Text } = Typography;

const Container = styled.div`
  color: black;
  background-color: white;
`;
const ProductImage = styled.div`
  width: 80px;
  height: 80px;
  background-color: aqua;
`;

const BlockNumber = styled.div`
  width: 90px;
  text-align: center;
  margin: auto;
  color: black;
  margin-left: 100px;
`;
const Des = styled.p`
  margin: auto;
  width: 260px;
  border: 1px solid black;
  height: 40px;
  border-radius: 1.5px;
  margin-left: 20px;
`;

const Quantity = styled.div`
  display: flex;
  align-items: center;
`;
const Amount = styled.div`
  width: 40px;
  text-align: center;
  border: 1.5px solid gray;
  height: 23.5px;
`;
const TitleCart = styled.div`
  display: flex;
  font-weight: 500;
  margin-left: 165px;
`;
const NamePage = styled.p`
  font-size: 30px;
  font-weight: 500;
  text-align: center;
`;
const AmountButton = styled.button`
  height: '25px'
`
const info = [
  {
    id: 0,
    picture: 'hi',
    des: 'ybinh',
    price: 100000,
    amount: 1,
  },
  {
    id: 1,
    picture: 'hu',
    des: 'yen binh',
    price: 300000,
    amount: 1,
  },
  {
    id: 2,
    picture: 'ha',
    des: 'binh',
    price: 150000,
    amount: 1,
  },
  {
    id: 3,
    picture: 'há',
    des: 'binh',
    price: 400000,
    amount: 1,
  },
];

const infoCart = ['Số Lượng', 'Số Tiền', 'Thành Tiền'];
const Cart = () => {
  const [cart, setCart] = useState(info);
  const updateCart = [...cart];
  // tăng số lượng sản phẩm
  const increaseQuantity = (item) => {
    const indexItem = cart.indexOf(item);
    updateCart[indexItem].amount++;
    setCart([...updateCart]); 
  };
  // giảm số lượng sản phẩm
  const decreaseQuantity = (item) => {
    const indexItem = cart.indexOf(item);
    if (updateCart[indexItem].amount !== 1) {
      updateCart[indexItem].amount--;
    } else {
      updateCart[indexItem].amount = 1;
    }
    setCart([...updateCart]);
  };
  //  console.log(cart)

  // tính tổng tiền
  const toTalProduct = () => {
    const sum = cart.reduce((total, item) => total + item.price * item.amount, 0);
    return sum;
  };
  const toTalAmount = () => {
    const sum = cart.reduce((total, item) => total + item.amount, 0);
    return sum;
  };

  return (
    <div>
      <Layout>
        <NamePage>GIỎ HÀNG CỦA BẠN</NamePage>
        <Container>
          <p>Sản phẩm</p>
          <TitleCart>
            {infoCart.map((item) => {
              return (
                <ul key={item} style={{ listStyleType: 'none', marginLeft: '100px' }}>
                  <li>
                    <Text type="secondary">{item}</Text>
                  </li>
                </ul>
              );
            })}
          </TitleCart>
        </Container>

        {cart.map((item) => {
          const { id, picture, des, price, amount } = item;
          return (
            <Container key={id} className="container" style={{ marginBottom: '17px'}}>
              <div style={{ display: 'flex' }}>
                <ProductImage>{picture}</ProductImage>
                <Des>{des}</Des>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <Quantity>
                  <AmountButton onClick={() => decreaseQuantity(item)} >
                    -
                  </AmountButton>
                  <Amount>{amount}</Amount>
                  <AmountButton onClick={() => increaseQuantity(item)} >
                    +
                  </AmountButton>
                </Quantity>
                <BlockNumber>{'₫' + price}</BlockNumber>
                <BlockNumber style={{ color: 'red' }}>{'₫' + amount * price}</BlockNumber>
              </div>
            </Container>
          );
        })}

        <div style={{ display: 'flex', color: 'black' }}>
          <h3 style={{ display: 'inline-block' }}>
            Tổng thanh toán ({toTalAmount()} sản phẩm) : {toTalProduct()}VND
          </h3>
          <button style={{ width: '250px', height: '45px' }}>MUA HÀNG</button>
        </div>
      </Layout>
    </div>
  );
};
export default Cart;
