import { Flex,Typography } from 'antd'
import React from 'react'
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
        font-family: Arial, Helvetica, sans-serif;
`
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
  @media (max-width: 576px) {
    width: 100%;
  }
  @media (min-width: 576px) and (max-width: 1200px) {
    width: 100% ;
}


`;
const CartTotal = ({posi,posiTop, sumAmount, sumProduct}) => {
  return (
    <ContainerTotal style={{ position: posi, top: posiTop }}>
    <Title
    >
      Cart Total
    </Title>
    <Flex justify="space-between">
      <div>
        <b>Total ({sumAmount()}):</b>
      </div>
      <div>
        <b>${sumProduct()}</b>
      </div>
    </Flex>
    <BuyButton>CHECKOUT</BuyButton>
  </ContainerTotal>
  )
}

export default CartTotal