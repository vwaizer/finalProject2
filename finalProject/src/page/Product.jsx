import React from 'react';
import CarouselItem from '../component/CarouselItem';
import ItemContainer from '../component/ItemContainer';
import Layout from '../component/layout/Layout';
import styled from 'styled-components';
import './Product.css';
const ItemArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
  }
  margin: 5px;
  margin-bottom: 30px;
`;
const Block = styled.div`
  border-radius: 10px;
  padding-top: 100px;
  padding-bottom: 100px;
`;
const Tittle = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  justify-content: space-between;
  padding-top: 20px;
`;

const Product = (props) => {
  const dataBase = props.data;
  const productPage = dataBase.filter((item, index) => index < 6);
  console.log(productPage);
  return (
    <Layout>
      <div className="section_card">
        <CarouselItem data={dataBase} />
        <Block>
          <Tittle>
            <span>Latest Collection</span>
            <h2>ESSENTIAL ITEMS</h2>
          </Tittle>
          <ItemArea>
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
            <span>Latest Collection</span>
            <h2>ESSENTIAL ITEMS</h2>
          </Tittle>
          <ItemArea>
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

        <Block>
          <Tittle>
            <span>Latest Collection</span>
            <h2>ESSENTIAL ITEMS</h2>
          </Tittle>
          <ItemArea>
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
            {dataBase.map((item, index) => {
              if (index >= 8 && index < 12) {
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
            <span>Latest Collection</span>
            <h2>ESSENTIAL ITEMS</h2>
          </Tittle>
          <ItemArea>
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
            {dataBase.map((item, index) => {
              if (index >= 8 && index < 12) {
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
            <span>Latest Collection</span>
            <h2>ESSENTIAL ITEMS</h2>
          </Tittle>
          <ItemArea>
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
            {dataBase.map((item, index) => {
              if (index >= 8 && index < 12) {
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
            <span>Latest Collection</span>
            <h2>ESSENTIAL ITEMS</h2>
          </Tittle>
          <ItemArea>
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
            {dataBase.map((item, index) => {
              if (index >= 8 && index < 12) {
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
            <span>Latest Collection</span>
            <h2>ESSENTIAL ITEMS</h2>
          </Tittle>
          <ItemArea>
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
            {dataBase.map((item, index) => {
              if (index >= 8 && index < 12) {
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
            <span>Latest Collection</span>
            <h2>ESSENTIAL ITEMS</h2>
          </Tittle>
          <ItemArea>
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
            {dataBase.map((item, index) => {
              if (index >= 8 && index < 12) {
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
