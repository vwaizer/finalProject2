import { Card } from 'antd';
import React from 'react';
import {  useNavigate } from 'react-router';
import styled from 'styled-components';

const ItemDetail = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width:300px;
`;


const ItemContainer = (props) => {
  const navi=useNavigate();
  const onDetail=()=>{
    console.log("detail");
    navi("/Detail")

  }
  return (
    <Card hoverable onClick={onDetail}>
      {/* <img src={props.picture} alt="" style={{ width: '300px', height: '300px' }}></img> */}
      <ItemDetail>
        <div><strong>{props.title}</strong></div>
        <div>{props.price}</div>
      </ItemDetail>
    </Card>
  );
};

export default ItemContainer;
