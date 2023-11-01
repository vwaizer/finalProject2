import { ShoppingCartOutlined } from '@ant-design/icons';
import { Badge, Button, Modal } from 'antd';
import React, { useContext, useEffect, useState } from 'react';
import { DataContext } from '../../App';
import './header.style.css';


const ModalCart = () => {
  let counting=0
  const cartData=useContext(DataContext).data;
  cartData.forEach((item,index)=>{
     counting+=item.amount
  })

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
       <Badge count={counting}>
     <Button className='button-header' type="primary" onClick={showModal}>
      <ShoppingCartOutlined/>
      </Button>
      <Modal title="Your Cart" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        {cartData.map((item) => {
          return(
            <div className='Cart' key={item.id}>
              <div className='img'>
                <img className='img-cart' src={item.images} alt='#'/>
              </div>
              <div className='title-price'>
                <li>{item.title}</li>
                <li>{item.price}</li>
              </div>
              <div>
                {item.amount}
              </div>
            </div>
          )
        })}      
      </Modal> 
    </Badge>
    </>
  );
};
export default ModalCart;