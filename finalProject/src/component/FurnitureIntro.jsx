import { Card, Image } from 'antd';
import React from 'react';
import styled from 'styled-components';
const IntroBlock=styled.div`
    font-family: Arial, sans-serif;
    text-align:center;
  

`;
const FlexBlock=styled.div`
    width:100%;
    padding:10px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
   
`;
const FlexRow=styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
    width:100%;
    @media (max-width:600px) {
        flex-direction:column;
    }
    
`;
const Context=styled.div`
    text-align:center;
    width:40%;
    word-wrap: break-word;
    
    margin:0px;
    @media (max-width:600px) {
        width:100%;
        margin-top:15px;
        margin-bottom:15px;
    }
    
`;
function FurnitureIntro() {
  return (
    <Card style={{border:"0px"}}>
        <IntroBlock  >
      <h1>Welcome to KONSEPT Furniture Store</h1>
      <FlexBlock>
        <FlexRow>
            <Image src='./img/intro1.jpg' preview={false} />
            <Context>
            <h2>Perfect Quality</h2>
            <div>anti-mite products</div>
            <div>Stringent quality control measures are meticulously implemented, with a keen focus on the examination and assessment of products, particularly those designed to be resistant to termites. </div>
            </Context>
        </FlexRow>
        <FlexRow>
        
            <Context>
            <h2>Cost savings</h2>
            <div>optimal cost</div>
            <div>The products provided are based on the agreement between the two parties, depending on the budget you can pay. Ensuring the most reasonable and economical amount for the homeowner.</div>
            </Context>
            <Image src='./img/intro2.jpg' />
        </FlexRow>
      </FlexBlock>
    </IntroBlock>
    </Card>
  );
}

export default FurnitureIntro;
