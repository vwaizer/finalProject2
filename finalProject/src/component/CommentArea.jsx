import React from 'react';
import { Avatar, Card, Divider } from 'antd';
import { MdOutlineMessage } from 'react-icons/md';
import styled from 'styled-components';
import { UserOutlined } from '@ant-design/icons';
const CommentContent = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  height: 100px;
  text-align: justify;
`;
const CommentBlock = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap:20px;
 justify-content: center;
  @media (max-width: 600px) {
    flex-direction: column;
    justify-content: space-between;
    height: fit-content + 150px;
    gap: 20px;
  }
`;
const CommentItem = styled.div`
  width: 400px;

  @media (max-width: 600px) {
    width: 100%;
  }
`;
const ContaineItem = styled.div`
  background-color:green;
   width:65px;
  height:60px; 
  text-align:center;
   padding:12px 0px;
    border-Radius:50%;
`
const CommentArea = () => (
  <CommentBlock>
    <CommentItem>
      <Card
        hoverable
        bordered={false}
        bodyStyle={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <ContaineItem>
        <MdOutlineMessage color='white' size={35} />
        </ContaineItem>
       
        <Divider />
        <CommentContent>
          I just received the walnut coffee table I ordered from this website, The craftsmanship is
          top-notch, and it adds a touch of elegance to my living room.Highly recommended!
        </CommentContent>
        <Divider />
        <div>
          <Avatar size={40} icon={<UserOutlined />} /> User1
        </div>
      </Card>
    </CommentItem>
    <CommentItem>
      <Card
        hoverable
        bordered={false}
        bodyStyle={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
         <ContaineItem>
         <MdOutlineMessage color='white' size={35} />
        </ContaineItem>
   
        <Divider />
        <CommentContent>
          I was a bit skeptical about buying a sofa online, but the product delivered to me was very
          surprising in terms of quality, the sofa was extremely comfortable and the fabric was
          durable. The color is true to the picture and delivery was very fast.
        </CommentContent>
        <Divider />
        <div>
          <Avatar size={40} icon={<UserOutlined />} /> User2
        </div>
      </Card>
    </CommentItem>
    <CommentItem>
      <Card
        hoverable
        bordered={false}
        bodyStyle={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
          <ContaineItem>
          <MdOutlineMessage color='white' size={35} />
        </ContaineItem>
        <Divider />
        <CommentContent>
          Modern and beautiful design, sturdy tables and chairs. Customer service is also excellent;
          They responded quickly to all my questions and helped me choose the right set of products
          for my space. I am very happy with my purchase!
        </CommentContent>
        <Divider />
        <div>
          <Avatar size={40} icon={<UserOutlined />} /> User3
        </div>
      </Card>
    </CommentItem>
  </CommentBlock>
);
export default CommentArea;
