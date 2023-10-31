import React from 'react';
import { Avatar, Card, Divider } from 'antd';
import { MdOutlineMessage } from "react-icons/md";
import styled from 'styled-components';
import { UserOutlined } from '@ant-design/icons';
const CommentContent=styled.div`
        width:80%;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        flex-wrap:wrap;
        height:150px;
        text-align:justify;
       
`;
const CommentBlock=styled.div`
      width:100%;
        display:flex;
        flex-direction:row;
        justify-content:space-evenly;
        @media (max-width: 600px) {
          flex-direction:column;
          justify-content:space-between;
          height:fit-content+150px;
          gap:20px;
        }
        
`;
const CommentItem=styled.div`
      width:40%;
      @media (max-width: 600px) {
        width:100%;
      }
`;
const CommentArea = () => (
  <CommentBlock >
    <CommentItem >
      <Card   hoverable bordered={false} bodyStyle={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}} >
      <MdOutlineMessage size={35} />
      <Divider/>
        <CommentContent>I just received the beautiful walnut coffee table I ordered from this website, and I couldn't be happier! The craftsmanship is top-notch, and it adds a touch of elegance to my living room.Highly recommended! </CommentContent>
        <Divider />
        <div><Avatar size={40} icon={<UserOutlined />} /> User1</div>
      </Card>
    </CommentItem>
    <CommentItem >
    <Card hoverable  bordered={false} bodyStyle={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}} >
    <MdOutlineMessage size={35} />
      <Divider/>
        <CommentContent>I was a bit skeptical about buying a sofa online, but after reading the glowing reviews, I decided to give it a shot. I'm so glad I did! The sofa is incredibly comfortable, and the fabric feels durable. The color is true to the pictures, and it arrived on time. This website offers great quality and value for money. </CommentContent>
        <Divider/>
        <div><Avatar size={40} icon={<UserOutlined />} /> User2</div>
      </Card>
    </CommentItem>
    <CommentItem >
    <Card  hoverable bordered={false} bodyStyle={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}} >
    <MdOutlineMessage size={35} />
      <Divider/>
        <CommentContent>I needed a new dining set for my home, and I found the perfect one on this website. The design is modern and sleek, and the table and chairs are sturdy. The customer service was also fantastic; they answered all my questions promptly and helped me choose the right set for my space. I'm thrilled with my purchase!</CommentContent>
        <Divider/>
        <div><Avatar size={40} icon={<UserOutlined />} /> User3</div>
      </Card>
    </CommentItem>
  </CommentBlock>
);
export default CommentArea;