import React from 'react';
import CarouselItem from '../component/CarouselItem';
import ItemContainer from '../component/ItemContainer';
import Layout from '../component/layout/Layout';
import styled from 'styled-components';
import { Image } from 'antd';
import ScrollToTopButton from '../component/ScrollToTop';
import './Product.css';
import Navigation from '../component/Navigation';
const ItemArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  margin: 5px;
  margin-bottom: 30px;
  height: 500px;
`;
const Block1 = styled.div`
  padding-top: 100px;
`;
const Tittle = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  justify-content: space-between;
  padding-top: 20px;
`;

const Product = (props) => {
  const dataBase = props.data;
  const productPage = dataBase.filter((item, index) => index < 4);
  console.log(productPage);
  return (
    <div>
      <Layout>
        <div className="section_card contain">
          <CarouselItem data={dataBase} />
          <Block1>
            <Navigation />
            <Tittle>
              <span id="collection">Latest Collection</span>
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
                      picture={item.images}
                      id={item.id}
                    />
                  );
                }
                return <></>;
              })}
            </ItemArea>
          </Block1>
          <Block1>
            <Tittle>
              <h2 id="best">BEST SELLER</h2>
              <span>ESSENTIAL ITEMS</span>
            </Tittle>
            <ItemArea>
              {dataBase.map((item, index) => {
                if (index > 4 && index < 9) {
                  return (
                    <ItemContainer
                    
                      key={index}
                      title={item.title}
                      price={item.price}
                      picture={item.images}
                      id={item.id}
                    />
                  );
                }
                return <></>;
              })}
            </ItemArea>
            <ItemArea>
              {dataBase.map((item, index) => {
                if (index > 9 && index < 14) {
                  return (
                    <ItemContainer
                      key={index}
                      title={item.title}
                      price={item.price}
                      picture={item.images}
                      id={item.id}
                    />
                  );
                }
                return <></>;
              })}
            </ItemArea>
          </Block1>
          <Block1>
            <Tittle>
              <span id="outstanding">Outstanding</span>
              <h2>ESSENTIAL ITEMS</h2>
            </Tittle>
            <ItemArea>
              {dataBase.map((item, index) => {
                if (index > 14 && index < 19) {
                  return (
                    <ItemContainer
                      key={index}
                      title={item.title}
                      price={item.price}
                      picture={item.images}
                      id={item.id}
                    />
                  );
                }
                return <></>;
              })}
            </ItemArea>
            <ItemArea>
              {dataBase.map((item, index) => {
                if (index > 18 && index < 23) {
                  return (
                    <ItemContainer
                      key={index}
                      title={item.title}
                      price={item.price}
                      picture={item.images[0]}
                      id={item.id}
                    />
                  );
                }
                return <></>;
              })}
            </ItemArea>
          </Block1>
          <Block1>
            <Tittle>
              <span id="Favorite">User Favorite</span>
              <h2>ESSENTIAL ITEMS</h2>
            </Tittle>
            <ItemArea>
              {dataBase.map((item, index) => {
                if (index > 23 && index < 28) {
                  return (
                    <ItemContainer
                      key={index}
                      title={item.title}
                      price={item.price}
                      picture={item.images}
                      id={item.id}
                    />
                  );
                }
                return <></>;
              })}
            </ItemArea>
            <ItemArea>
              {dataBase.map((item, index) => {
                if (index > 28 && index < 33) {
                  return (
                    <ItemContainer
                      key={index}
                      title={item.title}
                      price={item.price}
                      picture={item.images}
                      id={item.id}
                    />
                  );
                }
                return <></>;
              })}
            </ItemArea>
          </Block1>
          <Block1>
            <Tittle>
              <span id="Other">Another</span>
              <h2>ESSENTIAL ITEMS</h2>
            </Tittle>
            <ItemArea>
              {dataBase.map((item, index) => {
                if (index > 33 && index < 38) {
                  return (
                    <ItemContainer
                      key={index}
                      title={item.title}
                      price={item.price}
                      picture={item.images}
                      id={item.id}
                    />
                  );
                }
                return <></>;
              })}
            </ItemArea>
            <ItemArea>
              {dataBase.map((item, index) => {
                if (index > 38 && index < 43) {
                  return (
                    <ItemContainer
                      key={index}
                      title={item.title}
                      price={item.price}
                      picture={item.images[0]}
                      id={item.id}
                    />
                  );
                }
                return <></>;
              })}
            </ItemArea>
          </Block1>
          <Block1>
            <Tittle>
              <span>Another</span>
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
                      id={item.id}
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
                      id={item.id}
                    />
                  );
                }
                return <></>;
              })}
            </ItemArea>
          </Block1>
          <Block1>
            <Tittle>
              <span>Another</span>
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
                      id={item.id}
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
                      id={item.id}
                    />
                  );
                }
                return <></>;
              })}
            </ItemArea>
          </Block1>
          <Block1>
            <Tittle>
              <span>Another</span>
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
                      id={item.id}
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
                      id={item.id}
                    />
                  );
                }
                return <></>;
              })}
            </ItemArea>
          </Block1>
          <ScrollToTopButton />
        </div>
      </Layout>
    </div>
  );
};

export default Product;
