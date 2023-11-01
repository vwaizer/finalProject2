import React, { useContext} from 'react';
import { Avatar, Badge } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import './header.style.css';
import { DataContext } from '../../App';
const ModalCart = () => {
  let counting=0
  const cartData=JSON.parse(window.localStorage.getItem("cartData")).data;
  
  cartData.forEach((item,index)=>{
     counting+=item.amount
  })
  console.log(cartData);
  return (
    <>
      {/* <Button className='button-header' type="primary" onClick={showModal}>
      <ShoppingCartOutlined/>
      </Button>
      <Modal title="Your Cart" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>Add content</p>
      </Modal> */}
       <Badge count={counting}>
      <Avatar shape="square" size="middle" ><ShoppingCartOutlined/></Avatar>
    </Badge>
    </>
  );
};
export default ModalCart;