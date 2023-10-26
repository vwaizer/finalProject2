import React, { useContext } from 'react';
import { Button, Descriptions, Image } from 'antd';
import Layout from '../component/layout/Layout';
import styled from 'styled-components';
import {  useParams } from 'react-router';
import { DataContext } from '../App';

const Container=styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    margin:10px;
    @media (max-width: 600px) {
      display: flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    }
`;
const DescripBlock=styled.div`
    width:40%;
    
    @media (max-width: 600px) {
      width:100%;
      margin-top:10px;
    }
`;
const Detail = (props) =>{ 
  
  
  const urlData=useParams();
  const itemID=urlData.productID;
  const dataBase=props.data;
  const imgData=dataBase[itemID].images[0];
  const titleData=dataBase[itemID].title;
  const cartData=useContext(DataContext);
  console.log(cartData.data);
  
  const addToCart=()=>{
    cartData.method([...cartData.data,dataBase[itemID]])
}
  const items = [
    {
      key: '1',
      label: 'UserName',
      children: titleData,
    },
    {
      key: '2',
      label: 'Telephone',
      children: '1810000000',
    },
    {
      key: '3',
      label: 'Live',
      children: 'Hangzhou, Zhejiang',
    },
    {
      key: '4',
      label: 'Address',
      span: 2,
      children: 'No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China',
    },
    
  ];
  return(
    <Layout>
      <Container>
      <Image
    width={400}
    
    src={imgData}
    />
      <DescripBlock> <Descriptions title="Detail " column={3}  layout="vertical" size='middle' items={items} />
        <Button onClick={addToCart} className='buttonClass'>Them vao Gio Hang</Button>
      </DescripBlock>
      </Container>
    </Layout>
  
  );

}
export default Detail;