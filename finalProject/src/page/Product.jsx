import React from 'react';
import CarouselItemHome from '../component/CarouseItemHome';
import ItemContainer from '../component/ItemContainer';
import Layout from '../component/layout/Layout';
import styled from 'styled-components';
import { Divider } from 'antd';
import ScrollToTopButton from '../component/ScrollToTop';
import './Product.css';
import Navigation from '../component/Navigation';
const ItemArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 5px;
  margin-bottom: 30px;
  height: 500px;
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
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
  const displayData = [
    { images: ['./img/banner1.jpg'] },
    { images: ['./img/banner2.jpg'] },
    { images: ['./img/banner3.jpg'] },
  ];
  return (
    <div>
      <Layout>
        <div className="section_card contain">
          <CarouselItemHome data={displayData} />
          <Block1>
            <Tittle>
              <h2 className="section-title" id="collection">
                Latest Collection
              </h2>
              <span>ESSENTIAL ITEMS</span>
              <Divider />
            </Tittle>
            <ItemArea>
              {dataBase.map((item, index) => {
                if (index < 3) {
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
              <h2 className="section-title" id="Best Seller">
                BEST SELLER
              </h2>
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
              <h2 className="section-title" id="Bedding">
                Bedding Products
              </h2>
              <span>ESSENTIAL ITEMS</span>
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
              <h2 className="section-title" id="Sofa">
                Sofa Products
              </h2>
              <span>ESSENTIAL ITEMS</span>
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
              <h2 className="section-title" id="Desk">
                Desk Products
              </h2>
              <span>ESSENTIAL ITEMS</span>
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
              <h2 className="section-title" id="Dining">
                Dining Table Products
              </h2>
              <span>ESSENTIAL ITEMS</span>
            </Tittle>
            <ItemArea>
              {dataBase.map((item, index) => {
                if (index > 43 && index < 48) {
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
                if (index > 48 && index < 53) {
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
              <h2 className="section-title" id="Cabinet">
                Shoe Cabinet
              </h2>
              <span>ESSENTIAL ITEMS</span>
            </Tittle>
            <ItemArea>
              {dataBase.map((item, index) => {
                if (index > 53 && index < 58) {
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
                if (index > 58 && index < 63) {
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
              <h2 className="section-title" id="Makeup">
                Makeup Table
              </h2>
              <span>ESSENTIAL ITEMS</span>
            </Tittle>
            <ItemArea>
              {dataBase.map((item, index) => {
                if (index > 63 && index < 68) {
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
                if (index > 68 && index < 73) {
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
