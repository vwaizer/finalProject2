import React from 'react';
import styled from 'styled-components';
import ItemContainer from '../component/ItemContainer';

import CarouselItem from '../component/CarouselItem';
import Layout from '../component/layout/Layout';

const ItemArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
  }
  margin: 10px;
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
const Home = (props) => {
  const dataBase = props.data;
  const displayData = dataBase.filter((item, index) => index < 5);
  console.log(dataBase);

  return (
    <Layout>
      <div>
        <CarouselItem data={displayData} />
        <Block>
          <Tittle>
            <h2>Tieu Bieu</h2>
          </Tittle>
          <ItemArea>
            {/* <ItemContainer title="ban ghe" price="5" />
          <ItemContainer title="ban ghe" price="5" />
          <ItemContainer title="ban ghe" price="5" /> */}
            {dataBase.map((item, index) => {
              if (index < 3) {
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
              if (index >= 3 && index < 6) {
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
              if (index >= 6 && index < 9) {
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

export default Home;
