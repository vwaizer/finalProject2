import React from "react";
import styled from "styled-components";
import ItemContainer from "../components/ItemContainer";

import CarouselItem from "../components/CarouselItem";
import Layout from "../components/layout/Layout";

const ItemArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 5px;
`;
const Block=styled.div`
  border:2px solid black;
  margin-top:10px;
  margin-bottom:10px;
`;
const Home = (props) => {
  
  console.log(props.data);
  return (
    <Layout>
      <div>
        <CarouselItem />
        <Block>
          <h2>Tieu Bieu</h2>
        <ItemArea>
          <ItemContainer title="ban ghe" price="5" />
          <ItemContainer title="ban ghe" price="5" />
          <ItemContainer title="ban ghe" price="5" />
        </ItemArea>
        </Block>

        <Block>
          <h2>
            Moi Nhat
          </h2>
          <ItemArea>
          <ItemContainer title="ban ghe" price="5" />
          <ItemContainer title="ban ghe" price="5" />
          
        </ItemArea>
        <ItemArea>
          <ItemContainer title="ban ghe" price="5" />
          <ItemContainer title="ban ghe" price="5" />
          
        </ItemArea>
        </Block>
      </div>
    </Layout>
  );
};

export default Home;
