import React, { useState, useEffect } from 'react';
import Layout from '../component/layout/Layout';
import styled from 'styled-components';
import { Typography, Flex } from 'antd';
import { CiTrash } from 'react-icons/ci';
const { Text } = Typography;
const Container = styled.div`
  background-color: white;
  color: black;
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
  margin-left: 20px;
  font-size: 13px;
`;
const Des = styled.p`
  margin: auto;
  width: 230px;
  border: 1px solid black;
  height: 40px;
  border-radius: 1.5px;
  margin-left: 20px;
  margin-right: 50px;
`;

// const Quantity = styled.div`
//   display: flex;
//   align-items: center;
// `;
const Amount = styled.div`
  width: 40px;
  text-align: center;
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
const BuyButton = styled.button`
  width: 250px;
  height: 45px;
  background-color: black;
  color: white;
  font-weight: bold;
  font-family: 'Quicksand', sans-serif;
  margin-top: 10px;
`;
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
    // console.log(item)
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
    <Layout>
      {/* nav */}
      
      <Flex wrap="wrap" justify="space-evenly">
        {/* <Flex justify="space-between">
          <p>Sản phẩm</p>
          <TitleCart>
            {infoCart.map((item) => {
              return (
                <ul key={item} style={{ listStyleType: 'none', marginLeft: '90px' }}>
                  <li>
                    <Text type="secondary">{item}</Text>
                  </li>
                </ul>
              );
            })}
          </TitleCart>
        </Flex> */}

        {/* render list product  */}
        
        <div>
        <NamePage>GIỎ HÀNG CỦA BẠN</NamePage>
          {cart.map((item) => {
            const { id, picture, des, price, amount } = item;
            return (
              <div>
                <Flex
                  wrap="wrap"
                  justify="space-evenly"
                  key={id}
                  style={{ marginBottom: '17px', backgroundColor: 'white', color: 'black' }}
                >
                  <ProductImage>{picture}</ProductImage>
                  <div style={{ display: 'flex' }}>
                    <Des>{des}</Des>

                    {/* <Flex justify='space-around'> */}

                    <Flex align="center">
                      <div style={{border:'1px solid grey', display:'flex'}}>
                      <button onClick={() => decreaseQuantity(item)} style={{ height: '25px',backgroundColor:'white',border:'none',borderRight:'1px solid grey'}}>
                        -
                      </button>
                      <Amount>{amount}</Amount>
                      <button onClick={() => increaseQuantity(item)} style={{ height: '25px' ,backgroundColor:'white',border:'none',borderLeft:'1px solid grey'}}>
                        +
                      </button>
                      </div>
                    </Flex>
                  </div>
                  <Flex>
                    <BlockNumber>
                      <Text>{price}₫</Text>
                    </BlockNumber>

                    <BlockNumber>
                      <div>
                      <Text type="secondary">Thành tiền</Text>
                      </div>
                      <span style={{ color: '#a73340', fontWeight: 'bold' }}>
                        {amount * price}₫
                      </span>
                      <div>
                        <CiTrash></CiTrash>
                      </div>
                    </BlockNumber>
                  </Flex>

                  {/* </Flex> */}
                </Flex>
              </div>
            );
          })}
        </div>
        <div style={{ backgroundColor: 'white', color: 'black' }}>
          <Flex justify="space-between">
            <div>
              <b>Tổng tiền ({toTalAmount()}):</b>
            </div>
            <div>
              <b>{toTalProduct()}VND</b>
            </div>
          </Flex>
          <BuyButton>THANH TOÁN</BuyButton>
        </div>
      </Flex>
    </Layout>
  );
};
export default Cart;
