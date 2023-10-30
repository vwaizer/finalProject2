import React from 'react';
import { Avatar, Card, Col, Divider, Row } from 'antd';
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
const CommentArea = () => (
  <Row gutter={16}>
    <Col span={8}>
      <Card   hoverable bordered={false} bodyStyle={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}} >
      <MdOutlineMessage />
      <Divider/>
        <CommentContent>Card cinadsd     adasdassda </CommentContent>
        <Divider />
        <div><Avatar size={40} icon={<UserOutlined />} /> User1</div>
      </Card>
    </Col>
    <Col span={8}>
    <Card hoverable  bordered={false} bodyStyle={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}} >
      <MdOutlineMessage/>
      <Divider/>
        <CommentContent>Card cinadsd     adasdassda </CommentContent>
        <Divider/>
        <div><Avatar size={40} icon={<UserOutlined />} /> User1</div>
      </Card>
    </Col>
    <Col span={8}>
    <Card  hoverable bordered={false} bodyStyle={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}} >
      <MdOutlineMessage/>
      <Divider/>
        <CommentContent>Card cinadsd     adasdassda </CommentContent>
        <Divider/>
        <div><Avatar size={40} icon={<UserOutlined />} /> User1</div>
      </Card>
    </Col>
  </Row>
);
export default CommentArea;