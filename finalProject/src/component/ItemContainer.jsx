import { Card, Image } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';

const ItemDetail = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 300px;
`;

const ItemContainer = (props) => {
  const naPage = useNavigate();
  const nextPage = props.id;
  const onDetail = () => {
    naPage(`/${nextPage}`);
    // console.log(nextPage);
  };
  return (
    <Card hoverable onClick={onDetail}>
      {/* <img src={props.picture} alt="" style={{ width: '300px', height: '300px' }}></img> */}
      <Image width="100%" height={420} src={props.picture} />
      <ItemDetail>
        <div>
          <strong>{props.title}</strong>
        </div>
        <div>{props.price}</div>
      </ItemDetail>
    </Card>
  );
};

export default ItemContainer;
