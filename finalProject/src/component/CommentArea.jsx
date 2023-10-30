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
      <MdOutlineMessage />
      <Divider/>
        <CommentContent>Card cinadsd     adasdassda </CommentContent>
        <Divider />
        <div><Avatar size={40} icon={<UserOutlined />} /> User1</div>
      </Card>
    </CommentItem>
    <CommentItem >
    <Card hoverable  bordered={false} bodyStyle={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}} >
      <MdOutlineMessage/>
      <Divider/>
        <CommentContent>Card cinadsd     adasdassda </CommentContent>
        <Divider/>
        <div><Avatar size={40} icon={<UserOutlined />} /> User1</div>
      </Card>
    </CommentItem>
    <CommentItem >
    <Card  hoverable bordered={false} bodyStyle={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}} >
      <MdOutlineMessage/>
      <Divider/>
        <CommentContent>Card cinadsd     adasdassda </CommentContent>
        <Divider/>
        <div><Avatar size={40} icon={<UserOutlined />} /> User1</div>
      </Card>
    </CommentItem>
  </CommentBlock>
);
export default CommentArea;