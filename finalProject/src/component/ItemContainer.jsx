import React from 'react';
import styled from 'styled-components';

const ItemDetail = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ItemBlock = styled.div`
  width: 300px;
  height: 500px;
  padding: 10px;
  border: 2px solid black;
  border-radius: 5px;
  @media (max-width: 600px) {
    width: fit-content;
    height: fit-content;
    
  }
`;
const ItemContainer = (props) => {
  return (
    <ItemBlock>
      <img src={props.picture} alt="" style={{ width: '300px', height: '300px' }}></img>
      <ItemDetail>
        <div>{props.title}</div>
        <div>{props.price}</div>
      </ItemDetail>
    </ItemBlock>
  );
};

export default ItemContainer;
