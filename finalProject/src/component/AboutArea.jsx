import { Col, Row } from 'antd';
import React from 'react';
import styled from 'styled-components';
const AboutBlock=styled.div`
    width:100%;
    
`;

const AboutArea = () => {
  return (
   <AboutBlock>
     <Row gutter={[8, 8]} >
      <Col span={12}>
        <div>1</div>
      </Col>

      <Col span={12}>
        <div>2</div>
      </Col>
      <Col span={12}>
        <div>3</div>
      </Col>
      <Col span={12}>
        <div>4</div>
      </Col>
    </Row>
   </AboutBlock>
  );
};

export default AboutArea;
