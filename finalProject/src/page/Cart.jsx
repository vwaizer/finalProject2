import React, { useContext, useState } from 'react';
import Layout from '../component/layout/Layout';
import styled from 'styled-components';
import { Typography, Flex, Card } from 'antd';
import { Link, useSearchParams } from 'react-router-dom';
import { CiTrash } from 'react-icons/ci';
import { BsFillReplyFill } from 'react-icons/bs';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { HiArrowLongRight } from 'react-icons/hi2';
import { DataContext } from '../App';
import TextArea from 'antd/es/input/TextArea';
import CartItemContainer from '../component/CartItemContainer';
import CartTotal from '../component/layout/CartTotal';
import ItemContainer from '../component/ItemContainer';
const { Text } = Typography;

const ProductImage = styled.img`
  width: 90px;
  height: 80px;
`;

const LinkProduct = styled.a`
  display: flex;
  justify-content: right;
  color: black;
  font-weight: lighter;
  margin-bottom: 5px;
`;
const Des = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  width: 180px;
  height: 40px;
  border-radius: 1.5px;
  padding-top: 20px;
  margin: auto 20px;
  @media (max-width: 576px) {
    padding-top: 5px;
    margin: 0px;
  }
  @media (min-width: 576px) and (max-width: 768px) {
    padding-top: 12px;
  }
`;

const Amount = styled.div`
  width: 30px;
  text-align: center;
  height: 23.5px;
`;

const NamePage = styled.p`
  margin-top: 3px;
  margin-bottom: 0px;
  font-size: 30px;
  font-weight: 500;
  text-align: center;
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
  padding: 9px 0px;
  text-decoration: none;
  display: inline-block;
  border-radius: 90px;
  width: 250px;
  height: 45px;
  background-color: black;
  color: white;
  border: none;
  transition: background-color 0.4s linear;
  font-size: 16px;
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
const ListRender = styled.li`
  list-style-type: none;
  font-weight: lighter;
`;
const TitleAndAmount = styled.div`
  display: flex;
  @media (max-width: 576px) {
    flex-direction: column;
    height: 80px;
    margin-left: 10px;
  }
  @media (min-width: 576px) and (max-width: 768px) {
    height: 50px;
  }
`;
const InitPrice = styled.div`
  width: 90px;
  text-align: center;
  margin: auto;
  color: black;
  margin-right: 50px;
  font-size: 13px;
  @media (max-width: 576px) {
    margin: 0px;
    text-align: left;
  }
`;
const ContainerProduct = styled.div`
  display: flex;
  justify-content: space-around;
  @media (max-width: 576px) {
    display: flex;
    justify-content: space-evenly;
  }
`;
const Notice = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  @media (max-width: 576px) {
    justify-content: space-around;
  }
  @media (min-width: 576px) and (max-width: 768px) {
    justify-content: space-around;
  }
`;
const NoteContain = styled.div`
  width: 320px;
  @media (max-width: 576px) {
    width: 82%;
  }
  @media (min-width: 576px) and (max-width: 768px) {
    width: 90% !important;
  }
`;
const CartTotalContainer = styled.div`
  @media (max-width: 576px) {
    width: 82%;
  }
  @media (min-width: 576px) and (max-width: 768px) {
    width: 88%;
  }
  @media (min-width: 769px) and (max-width: 992px) {
    width: 86.5%;
  }
  @media (min-width: 992px) and (max-width: 1200px) {
    width: 74%;
  }
`;
const TotalPrice = styled.div`
  width: 90px;
  text-align: center;
  margin: auto;
  color: black;
  margin-left: 20px;
  font-size: 13px;
  @media (min-width: 600px) and (max-width: 800px) {
    display: flex;
    width: 100%;
    margin: 0px;
    justify-content: space-around;
    padding-right: 6px;
  }
`;
const Block = styled.div`
  display: flex;
  @media (min-width: 600px) and (max-width: 800px) {
    flex-direction: column;
  }
`;
const Cart = (props) => {
  const cartData = useContext(DataContext);
  // console.log(props.data)
  const randomItems = [];
  let suggestedItem = [];
  for (let i = 0; suggestedItem.length < 8; i++) {
    randomItems.push(props.data[Math.floor(Math.random() * props.data.length)]);
    suggestedItem = [...new Set(randomItems)];
  }
  console.log(randomItems);
  console.log(suggestedItem);
  const [urlParam, setUrlParam] = useSearchParams();
  const itemID = urlParam.get('id');
  const dataBase = cartData.data;

  const [cart, setCart] = useState(dataBase);
  const updateCart = [...cart];
  const ruleBackProduct = [
    'Sản phẩm được đổi 1 lần duy nhất',
    'Sản phẩm nguyên giá được đổi trong 07 ngày trên toàn hệ thống',
    'Sản phẩm sale chỉ hỗ trợ đổi size (nếu cửa hàng còn) trong 07 ngày trên toàn hệ thống',
    'Sản phẩm còn đủ tem mác, chưa qua sử dụng.'
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
            <div style={{ marginTop: '25px' }}>
              {cart.map((item) => {
                const { id, images, title, price, amount } = item;
                return (
                  <ContainerProduct>
                    <Flex
                      wrap="wrap"
                      justify="space-evenly"
                      key={id}
                      style={{ marginBottom: '17px' }}
                    >
                      <ProductImage src={images} alt="" />
                     
                      <Block>
                        <TitleAndAmount>
                          <Des>{title}</Des>
                          <InitPrice>
                            <Text>${price}</Text>
                          </InitPrice>
                          <Flex align="center">
                            <div
                              style={{
                                border: '1px solid grey',
                                display: 'flex',
                                marginTop: '7px',
                                marginRight: '35px',
                              }}
                            >
                              <AmountButton
                                onClick={() => decreaseQuantity(item)}
                                style={{ borderRight: '1px solid grey' }}
                              >
                                -
                              </AmountButton>
                              <Amount> {amount}</Amount>
                              <AmountButton
                                onClick={() => increaseQuantity(item)}
                                style={{ borderLeft: '1px solid grey' }}
                              >
                                +
                              </AmountButton>
                            </div>
                          </Flex>
                        </TitleAndAmount>

                        <TotalPrice>
                          <div>
                            <Text type="secondary">Thành tiền</Text>
                          </div>
                          <span style={{ color: '#a73340', fontWeight: 'bold' }}>
                            ${amount * price}
                          </span>
                          <div onClick={() => removeItem(item)}>
                            <CiTrash style={{ cursor: 'pointer' }}></CiTrash>
                          </div>
                        </TotalPrice>
                      </Block>
                    </Flex>
                  </ContainerProduct>
                );
              })}
            </div>
            <Notice>
              <NoteContain>
                <p style={{ fontWeight: 'bold' }}>Ghi chú đơn hàng</p>
                <TextArea rows={5} placeholder="Ghi chú của bạn" />
              </NoteContain>
              <NoteContain style={{ width: '400px' }}>
                <p style={{ fontWeight: 'bold' }}> Chính sách Đổi/Trả</p>
                {ruleBackProduct.map((item) => {
                  return (
                    <ListRender key={item}>
                      <HiOutlineArrowNarrowRight /> {item}
                    </ListRender>
                  );
                })}
              </NoteContain>
            </Notice>
          </div>

          <CartTotalContainer>
            <LinkProduct href="/product">
              Tiếp tục mua hàng
              <HiArrowLongRight style={{ marginTop: '5px', marginLeft: '5px' }} />
            </LinkProduct>
            <CartTotal
              posi="sticky"
              posiTop="32px"
              sumAmount={toTalAmount}
              sumProduct={toTalProduct}
            />
          </CartTotalContainer>
        </Flex>
      ) : (
        // layout giỏ hàng khi không có sp
        <div>
          <Flex wrap="wrap" justify="space-evenly">
            <div style={{ flex: 0.95 }}>
              <NamePage>GIỎ HÀNG CỦA BẠN</NamePage>
              <p style={{ textAlign: 'center', fontWeight: 'lighter', fontSize: '17px' }}>
                Giỏ hàng của bạn đang trống
              </p>
              <div style={{ textAlign: 'center' }}>
                <ContinueShopping href="/Product">
                  <BsFillReplyFill /> TIẾP TỤC MUA HÀNG
                </ContinueShopping>
              </div>
            </div>
            <div style={{ width: '330px', height: '160px', marginTop: '15px' }}>
              <CartTotal sumAmount={toTalAmount} sumProduct={toTalProduct} />
            </div>
          </Flex>
          <div>
            <Flex style={{ margin: '0px 20px' }} justify="space-between">
              <div>
                <span style={{ fontSize: '22px', fontWeight: 'lighter' }}>CÓ THỂ BẠN SẼ THÍCH</span>
              </div>
              <div style={{ marginTop: '3px' }}>
                <Link style={{ fontSize: '22px' }} to="/product#best">
                  See More
                </Link>
              </div>
            </Flex>
            <ItemArea>
              {suggestedItem.map((item, index) => {
                if (index <= 3)
                  return (
                    <CartItemContainer
                      key={index}
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
                if (index >= 4)
                  return (
                    <CartItemContainer
                      key={index}
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
