import { Card } from 'antd';
import React from 'react';
import styled from 'styled-components';

const ItemDetail = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;


const ItemContainer = (props) => {
  return (
    <Card hoverable>
      <img src={props.picture} alt="" style={{ width: '300px', height: '300px' }}></img>
      <ItemDetail>
        <div><strong>{props.title}</strong></div>
        <div>{props.price}</div>
      </ItemDetail>
    </Card>
  );
};

export default ItemContainer;
