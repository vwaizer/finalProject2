import { Button, Card, Image } from 'antd';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import { DataContext } from '../App';

const ItemDetail = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 310px;
  margin-top: 10px;
  
`;

const ItemContainer = (props) => {
  const dataBase = props.data;
  const itemID = dataBase.id;
  let amountData = dataBase.amount;
  const cartData = useContext(DataContext);
  let isExist = false;

  console.log(cartData.data);
  let a = cartData.data.findIndex((item) => {
    return item.id === Number(itemID);
  });
  if (a >= 0) {
    isExist = true;
  }
  console.log(a);
  const addToCart = () => {
    alert('Them gio hang thanh cong');
    if (isExist) {
      amountData++;
      cartData.data[a].amount = amountData;
    } else {
      cartData.method([...cartData.data, dataBase]);
    }
  };
  let nextPage = dataBase.id;
  if (dataBase.id > 0) {
    nextPage--;
  }
  const naPage = useNavigate();
  const onDetail = () => {
    console.log(nextPage);
    naPage(`/${nextPage}`);
    // console.log(nextPage);
  };
  return (
    <Card style={{ border: '0px', width: '360px' }} hoverable onClick={onDetail}>
      {/* <img src={props.picture} alt="" style={{ width: '300px', height: '300px' }}></img> */}
      <Image width="100%" height={420} src={dataBase.images[0]} />
      <ItemDetail>
        <div>
          {' '}
          <strong>{dataBase.title}</strong>
        </div>
        <div style={{fontFamily:"Kaushan Script"}} >
          
          {dataBase.discount ? (
            <>
              <span style={{ textDecoration: 'line-through', marginRight: '5px' }}>
                ${dataBase.price}
              </span>
              <span>${dataBase.discount}</span>
            </>
          ) : (
            <span>${dataBase.price}</span>
          )}
        </div>
      </ItemDetail>
      <div style={{marginBottom:"10px"}}>{dataBase.category}</div>
      <Button onClick={addToCart} className="buttonHome">
        Add To Cart
      </Button>
    </Card>
  );
};

export default ItemContainer;
