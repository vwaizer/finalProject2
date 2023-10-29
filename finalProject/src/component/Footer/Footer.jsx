import { FacebookOutlined, TwitterOutlined, YoutubeOutlined } from '@ant-design/icons';
import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import AboutUsBox from './AboutUsBox';
import './Footer.style.css';
import HelpBox from './HelpBox';
import ImgFooter from './ImgFooter';
import Orther from './Orther';
import TitleFooter from './TitleFooter';
import UnderTitle from './UnderTitle';
import { ArrowRightOutlined } from '@ant-design/icons';
function Footer() {
  return (
    <div className="cover">
      <Container>
        <Row className="container">
          <div>
            <TitleFooter title="KONSEPT HOMEPLUS" />
            <ImgFooter
              image="https://nextjs-test-k0n24xyth-hieu2304.vercel.app/_next/static/media/logo-address.634396fa.svg"
              title="10800 East 45th Ave. Denver, CO 80239"
            />
            <ImgFooter
              image="https://nextjs-test-k0n24xyth-hieu2304.vercel.app/_next/static/media/logo-address.634396fa.svg"
              title="+844-763-6278"
            />
            <div className="icon-footer">
              <FacebookOutlined />
              <TwitterOutlined />
              <YoutubeOutlined />
            </div>
          </div>
          <Col className="col" sm>
            <HelpBox title="Helps" />
          </Col>
          <Col className="col" sm>
            <AboutUsBox title="About Us" />
          </Col>
          <Orther
            title="Enter your email to receive special offers and more!"
            inputType="email"
            placeholder="Your email address"
            button={<ArrowRightOutlined />}
          />
        </Row>
      </Container>
      <UnderTitle
        className="under-title"
        title="Copyright © 2023 Group1-JS88. All Rights Reserved"
      />
    </div>
  );
}

export default Footer;
