import { Flex } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
const ContainerTotal = styled.div`
  border: 1px dashed grey;
  padding: 15px;
  border-radius: 5px;
  margin-bottom: 20px;
`;
const Title = styled.h2`
  margin-top: 0px;
  font-weight: 550;
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

  margin-top: 10px;
  @media (max-width: 576px) {
    width: 100%;
  }
  @media (min-width: 576px) and (max-width: 1200px) {
    width: 100%;
  }
`;
const CartTotal = ({ posi, posiTop, sumAmount, sumProduct }) => {
  let numberProduct = sumAmount()
const naPage = useNavigate();
  const goToPayment=()=>{
    if(numberProduct>0){
      naPage(`/Payment`);
    }
else{
  alert("Your cart is empty") 
  naPage(`/`);
} 
  }
  return (
    <ContainerTotal style={{ position: posi, top: posiTop }}>
      <Title>Cart Total</Title>
      <Flex justify="space-between">
        <div>
          <b>Total ({sumAmount()}):</b>
        </div>
        <div>
          <b>${sumProduct()}</b>
        </div>
      </Flex>
      <BuyButton onClick={goToPayment}>CHECKOUT</BuyButton>
    </ContainerTotal>
  );
};

export default CartTotal;
