import React from 'react';
import { Descriptions, Image } from 'antd';
import Layout from '../component/layout/Layout';
import styled from 'styled-components';

const Container=styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    margin:10px;
`;
const Detail = () =>{ 
  const items = [
    {
      key: '1',
      label: 'UserName',
      children: 'Zhou Maomao',
    },
    {
      key: '2',
      label: 'Telephone',
      children: '1810000000',
    },
    {
      key: '3',
      label: 'Live',
      children: 'Hangzhou, Zhejiang',
    },
    {
      key: '4',
      label: 'Address',
      span: 2,
      children: 'No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China',
    },
    {
      key: '5',
      label: 'Remark',
      children: 'empty',
    },
  ];
  return(
    <Layout>
      <Container>
      <Image
    width={400}
    
    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
    />
      <div style={{width:"50%"}}> <Descriptions title="User Info" column={3}  layout="vertical" size='middle' items={items} />;</div>
      </Container>
    </Layout>
  
  );

}
export default Detail;