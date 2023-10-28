import React, { useContext } from 'react';
import { Button, Descriptions, Image } from 'antd';
import Layout from '../component/layout/Layout';
import styled from 'styled-components';
import {  useParams } from 'react-router';
import { DataContext } from '../App';
import ItemContainer from '../component/ItemContainer';


const Container=styled.div`
    display:flex;
    flex-direction:row;
    gap:20px;
    justify-content:center;
    
    margin:10px;
    @media (max-width: 600px) {
      display: flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    }
`;
const ImgContainer=styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-evenly;
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
const randomID=[Math.floor(Math.random() * 41),Math.floor(Math.random() * 41),Math.floor(Math.random() * 41)];
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
      label: 'Name:',
      children: titleData,
    },
    {
      key: '2',
      label: 'ID',
      children: dataBase[itemID].id,
    },
    {
      key: '3',
      label: 'category',
      children: dataBase[itemID].category,
    },
    {
      key:'4',
      label:'description',
      span:'screen',
      children:dataBase[itemID].description,
    },
    {
      key: '5',
      label: 'price',
      children: dataBase[itemID].price,
    },
    
  ];
  return(
    <Layout>
      <Container>
      <Image
    width={400}
    height={380}
    src={imgData}
    />
      <DescripBlock> <Descriptions title="Detail " column={3}  layout="vertical" size='middle' items={items} />
        <Button onClick={addToCart} className='buttonClass'>add to cart</Button>
      </DescripBlock>
      </Container>
      <h2>Related Product</h2>
      <ImgContainer>
        {/* <Image src={dataBase[Math.floor(Math.random() * 41)].images[0]} width={400} height={300}/>
        <Image src={dataBase[Math.floor(Math.random() * 41)].images[0]} width={400} height={300}/>
        <Image src={dataBase[Math.floor(Math.random() * 41)].images[0]} width={400} height={300}/> */}
        <ItemContainer picture={dataBase[randomID[0]].images[0]} id={randomID[0]}/>
        <ItemContainer picture={dataBase[randomID[1]].images[0]} id={randomID[1]}/>
        <ItemContainer picture={dataBase[randomID[2]].images[0]} id={randomID[2]}/>
      </ImgContainer>
      
    </Layout>
  
  );

}
export default Detail;