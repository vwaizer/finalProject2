import React from 'react'
import styled from 'styled-components'
import ItemContainer from '../components/ItemContainer'; 

import CarouselItem from '../components/CarouselItem';
import Layout from '../Components/layout/Layout';
const ItemArea=styled.div`
  display:flex;
  flex-direction:row;
  justify-content:space-evenly;
  margin:5px;
`;
const Home = () => {
  return (
    <Layout>
      <div>
      <CarouselItem/>
      <ItemArea>
        <ItemContainer title="ban ghe" price="5"/>
        <ItemContainer title="ban ghe" price="5"/>
        <ItemContainer title="ban ghe" price="5"/>
      </ItemArea>
      <ItemArea>
        <ItemContainer title="ban ghe" price="5"/>
        <ItemContainer title="ban ghe" price="5"/>
        <ItemContainer title="ban ghe" price="5"/>
      </ItemArea>
      <ItemArea>
          <ItemContainer title="ban ghe" price="5"/>
        <ItemContainer title="ban ghe" price="5"/>
        <ItemContainer title="ban ghe" price="5"/>
      </ItemArea>
    </div>
    </Layout>
  )
}

export default Home