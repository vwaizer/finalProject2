import React from "react";
import CarouselItem from "../component/CarouselItem";
import ItemContainer from "../component/ItemContainer";
import Layout from "../component/layout/Layout";
import styled from "styled-components";
const ItemArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
  }
  margin: 5px;
`;
const Block = styled.div`
  border: 2px solid black;
  border-radius: 10px;
  padding: 5px;
  margin-top: 10px;
  margin-bottom: 10px;
`;
const Tittle = styled.div`
  margin: 5px;
`;
const Product = (props) => {
  const dataBase = props.data;
  const productPage = dataBase.filter((item, index) => index < 6);
  console.log(productPage);
  return (
    <Layout>
      <div>
        <CarouselItem data={productPage} />
        <Block>
          <Tittle>
            <h2>Tieu Bieu</h2>
          </Tittle>
          <ItemArea>
            {/* <ItemContainer title="ban ghe" price="5" />
          <ItemContainer title="ban ghe" price="5" />
          <ItemContainer title="ban ghe" price="5" /> */}
            {dataBase.map((item, index) => {
              if (index < 4) {
                return (
                  <ItemContainer
                    key={index}
                    title={item.title}
                    price={item.price}
                    picture={item.images[0]}
                  />
                );
              }
              return <></>;
            })}
          </ItemArea>
        </Block>

        <Block>
          <Tittle>
            <h2>Moi Nhat</h2>
          </Tittle>
          <ItemArea>
            {/* <ItemContainer title="ban ghe" price="5" />
          <ItemContainer title="ban ghe" price="5" />
          <ItemContainer title="ban ghe" price="5" /> */}
            {dataBase.map((item, index) => {
              if (index >= 4 && index < 8) {
                return (
                  <ItemContainer
                    key={index}
                    title={item.title}
                    price={item.price}
                    picture={item.images[0]}
                  />
                );
              }
              return <></>;
            })}
          </ItemArea>
          <ItemArea>
            {/* <ItemContainer title="ban ghe" price="5" />
          <ItemContainer title="ban ghe" price="5" />
          <ItemContainer title="ban ghe" price="5" /> */}
            {dataBase.map((item, index) => {
              if (index >= 8 && index < 10) {
                return (
                  <ItemContainer
                    key={index}
                    title={item.title}
                    price={item.price}
                    picture={item.images[0]}
                  />
                );
              }
              return <></>;
            })}
          </ItemArea>
        </Block>
      </div>
    </Layout>
  );
};

export default Product;
