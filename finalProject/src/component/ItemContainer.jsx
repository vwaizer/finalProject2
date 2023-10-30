import { Card, Image } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';

const ItemDetail = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 310px;
`;

const ItemContainer = (props) => {
  const dataBase=props.data;
  let nextPage = dataBase.id;
  if (props.id > 0) {
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
      <Image width="100%"  height={420} src={dataBase.images[0]} />
      <ItemDetail>
        <div> <strong>{dataBase.title}</strong></div>
         <div>${dataBase.price}</div> 
      </ItemDetail>
    </Card>
  );
};

export default ItemContainer;
