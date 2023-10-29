import React from 'react';
import styled from 'styled-components';
import ItemContainer from '../component/ItemContainer';


import Layout from '../component/layout/Layout';
import CarouselItemHome from '../component/CarouseItemHome';


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
  const displayData = [{images:['./img/banner1.jpg']},{images:['./img/banner2.jpg']},{images:['./img/banner3.jpg']}];
  
  return (
    <Layout>
      <div>
        
        <CarouselItemHome data={displayData} />
        <Block>
          <Tittle>
            <hr></hr>
            <h2>Sản Phẩm Tiêu Biểu</h2>
        
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
        </Block>

        <Block>
          <Tittle>
            <h2>Sản Phẩm Mới Nhất </h2>
          </Tittle>
          <ItemArea>
            
            {dataBase.map((item, index) => {
              if (index >= 3 && index < 6) {
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
              if (index >= 6 && index < 9) {
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
        </Block>
      </div>
    </Layout>
  );
};

export default Home;
