import { Image } from 'antd';
import React from 'react';
import styled from 'styled-components';
const IntroBlock=styled.div`
    font-family: Arial, sans-serif;
    text-align:center;
  

`;
const FlexBlock=styled.div`
    width:100%;
    padding:10px;
   
`;
const FlexRow=styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
    
`;

function FurnitureIntro() {
  return (
    <IntroBlock  >
      <h1>Welcome to KONSEPT Furniture Store</h1>
      <FlexBlock>
        <FlexRow>
            <Image src='./img/intro1.jpg' />
            <h2>Perfect Quality</h2>
        </FlexRow>
      </FlexBlock>
    </IntroBlock>
  );
}

export default FurnitureIntro;
