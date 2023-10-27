import { Card, Image } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';

const ItemDetail = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

const ItemContainer = (props) => {
  const naPage = useNavigate();
  let nextPage = props.id;
  if (props.id > 0) {
    nextPage--;
  }

  const onDetail = () => {
    naPage(`/${nextPage}`);
    // console.log(nextPage);
  };
  return (
    <Card style={{ border: '0px', width: '100%' }} hoverable onClick={onDetail}>
      {/* <img src={props.picture} alt="" style={{ width: '300px', height: '300px' }}></img> */}
      <Image width="100%" height={420} src={props.picture} />
      <ItemDetail>
        <div>{props.title ? <strong>{props.title}</strong> : <></>}</div>
        {props.price ? <div>${props.price}</div> : <></>}
      </ItemDetail>
    </Card>
  );
};

export default ItemContainer;
