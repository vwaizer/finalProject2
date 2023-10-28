import React, { useContext, useState } from 'react';
import Layout from '../component/layout/Layout';
import styled from 'styled-components';
import { Typography, Flex, Card } from 'antd';
import { Link, useSearchParams } from 'react-router-dom';
import { CiTrash } from 'react-icons/ci';
import { BsFillReplyFill } from 'react-icons/bs';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { DataContext } from '../App';
import TextArea from 'antd/es/input/TextArea';
import ItemContainer from '../component/ItemContainer';
const { Text } = Typography;

const ProductImage = styled.img`
  width: 90px;
  height: 80px;
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
  font-family: Arial, Helvetica, sans-serif;
  width: 200px;
  height: 40px;
  border-radius: 1.5px;
  padding-top: 20px;
  margin: auto 20px;
`;

const Amount = styled.div`
  width: 30px;
  text-align: center;
  height: 23.5px;
`;

const NamePage = styled.p`
  margin-top: 0px;
  font-size: 30px;
  font-weight: 500;
  text-align: center;
`;
const BuyButton = styled.div`
  cursor: pointer;
  border-radius: 3px;
  text-align: center;
  font-size: 18px;
  padding: 11px 0px;
  width: 300px;
  height: 45px;
  background-color: black;
  color: white;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
  margin-top: 10px;
`;
const AmountButton = styled.div`
  text-align: center;
  width: 25px;
  height: 25px;
  background-color: white;
  border: none;
  cursor: pointer;
`;
const ContinueShopping = styled.a`
  padding: 6px 0px;
  text-decoration: none;
  display: inline-block;
  border-radius: 90px;
  width: 200px;
  height: 35px;
  background-color: black;
  color: white;
  border: none;
  transition: background-color 0.4s linear;
  &:hover {
    background-color: white;
    color: black;
    border: 2px solid black;
  }
`;
const ItemArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  margin: 10px;
  
`;
const ContainerTotal = styled.div`
  border: 1px dashed grey;
  padding: 15px;
  border-radius: 5px;
  margin-bottom: 20px;
`;
const Cart = (props) => {
  const cartData = useContext(DataContext);
  // console.log(props.data)
  const suggestedItem = [];
  for (let i = 0; i < 6; i++) {
    suggestedItem.push(props.data[Math.floor(Math.random() * props.data.length)]);
  }
  // console.log(suggestedItem)
  // console.log(cartData.data);
  const [urlParam, setUrlParam] = useSearchParams();
  const itemID = urlParam.get('id');
  const dataBase = cartData.data;

  const [cart, setCart] = useState(dataBase);
  const updateCart = [...cart];
  const ruleBackProduct = [
    'Sản phẩm được đổi 1 lần duy nhất',
    'Sản phẩm nguyên giá được đổi trong 07 ngày trên toàn hệ thống',
    'Sản phẩm sale chỉ hỗ trợ đổi size (nếu cửa hàng còn) trong 07 ngày trên toàn hệ thống',
  ];
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
  // xóa sp
  const removeItem = (item) => {
    const updatedCart = cart.filter((cartItem) => cartItem !== item);
    setCart(updatedCart);
  };
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
      {/* layout giỏ hàng khi có sp  */}
      {cart.length > 0 ? (
        <Flex wrap="wrap" justify="space-evenly">
          <div>
            <NamePage>GIỎ HÀNG CỦA BẠN</NamePage>
            {cart.map((item) => {
              const { id, images, title, price, amount } = item;
              return (
                <div>
                  <Flex
                    wrap="wrap"
                    justify="space-evenly"
                    key={id}
                    style={{ marginBottom: '17px', backgroundColor: 'white', color: 'black' }}
                  >
                    <ProductImage src={images} alt="" />
                    <div style={{ display: 'flex' }}>
                      <Des>{title}</Des>

                      <Flex align="center">
                        <div style={{ border: '1px solid grey', display: 'flex' }}>
                          <AmountButton
                            onClick={() => decreaseQuantity(item)}
                            style={{ borderRight: '1px solid grey' }}
                          >
                            -
                          </AmountButton>
                          <Amount>{amount}</Amount>
                          <AmountButton
                            onClick={() => increaseQuantity(item)}
                            style={{ borderLeft: '1px solid grey' }}
                          >
                            +
                          </AmountButton>
                        </div>
                      </Flex>
                    </div>
                    <Flex>
                      <BlockNumber>
                        <Text>${price}</Text>
                      </BlockNumber>

                      <BlockNumber>
                        <div>
                          <Text type="secondary">Thành tiền</Text>
                        </div>
                        <span style={{ color: '#a73340', fontWeight: 'bold' }}>
                          ${amount * price}
                        </span>
                        <div onClick={() => removeItem(item)}>
                          <CiTrash style={{ cursor: 'pointer' }}></CiTrash>
                        </div>
                      </BlockNumber>
                    </Flex>
                  </Flex>
                </div>
              );
            })}
            <div style={{ marginBottom: '20px' }}>
              <Flex wrap="wrap" gap="20px">
                <div>
                  <p style={{ fontWeight: 'bold' }}>Ghi chú đơn hàng</p>
                  <TextArea style={{ width: '320px' }} rows={4} placeholder="Ghi chú của bạn" />
                </div>
                <div style={{ width: '400px' }}>
                  <p style={{ fontWeight: 'bold' }}> Chính sách Đổi/Trả</p>
                  {ruleBackProduct.map((item) => {
                    return (
                      <li style={{ listStyleType: 'none', fontWeight: 'lighter' }} key={item}>
                        <HiOutlineArrowNarrowRight /> {item}
                      </li>
                    );
                  })}
                </div>
              </Flex>
            </div>
          </div>

          <div>
            <ContainerTotal style={{ color: 'black', position: 'sticky', top: '32px' }}>
              <h2
                style={{
                  fontWeight: '550',
                  fontFamily: 'Arial, Helvetica, sans-serif',
                }}
              >
                Cart Total
              </h2>
              <Flex justify="space-between">
                <div>
                  <b>Total ({toTalAmount()}):</b>
                </div>
                <div>
                  <b>${toTalProduct()}</b>
                </div>
              </Flex>
              <BuyButton>CHECKOUT</BuyButton>
            </ContainerTotal>
          </div>
        </Flex>
      ) : (
        // layout giỏ hàng khi không có sp
        <div>
          <Flex wrap="wrap" justify="space-evenly">
            <div style={{ flex: 0.95 }}>
              <NamePage>GIỎ HÀNG CỦA BẠN</NamePage>
              <p style={{ textAlign: 'center', fontWeight: 'lighter' }}>
                Giỏ hàng của bạn đang trống
              </p>
              <div style={{ textAlign: 'center' }}>
                <ContinueShopping href="/Product">
                  <BsFillReplyFill /> TIẾP TỤC MUA HÀNG
                </ContinueShopping>
              </div>
            </div>
            <ContainerTotal>
              <h2
                style={{
                  fontWeight: '550',
                  fontFamily: 'Arial, Helvetica, sans-serif',
                }}
              >
                Cart Total
              </h2>
              <Flex justify="space-between">
                <div>
                  <b style={{ fontSize: '15px' }}>Total ({toTalAmount()}):</b>
                </div>
                <div>
                  <b>${toTalProduct()}</b>
                </div>
              </Flex>
              <BuyButton>CHECKOUT</BuyButton>
            </ContainerTotal>
          </Flex>
          <div>
            <Flex style={{ margin: '0px 20px' }} justify="space-between">
              <div>
                <span style={{ fontSize: '22px', fontWeight: 'lighter' }}>CÓ THỂ BẠN SẼ THÍCH</span>
              </div>
              <div style={{ marginTop: '3px' }}>
                <Link style={{ fontSize: '22px'}} to="/product#best">See More</Link>
              </div>
            </Flex>

            {/* <Flex justify="space-around" wrap="wrap">
              {suggestedItem.map((item) => {
                const { id, images, title, price } = item;
                return (
                  <Card hoverable key={id} style={{ width: '250px' }}>
                    <img src={images} style={{ width: '210px', height: '180px' }}></img>
                    <Flex justify="space-evenly">
                      <div style={{flex:1}}>{title}</div>
                      <div>${price}</div>
                    </Flex>
                    <p style={{ textAlign: 'center' }}>About Product</p>
                  </Card>
                );
              })}
            </Flex> */}
            <ItemArea>
              {suggestedItem.map((item, index) => {
                if(index <=3)
                  return (
              
    <ItemContainer
                      key={item.id}
                      title={item.title}
                      price={item.price}
                      picture={item.images[0]}
                      id={item.id}
                    />
               
                
                  );
                return <></>;
                
              })}
            </ItemArea>
            <ItemArea>
              {suggestedItem.map((item, index) => {
                if(index>=4)
                return (
                  <ItemContainer
                    key={item.id}
                    title={item.title}
                    price={item.price}
                    picture={item.images[0]}
                    id={item.id}
                  />
                );
                return <></>;
              })}
            </ItemArea>
          </div>
        </div>
      )}
    </Layout>
  );
};
export default Cart;
