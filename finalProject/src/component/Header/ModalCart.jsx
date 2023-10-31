import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import './header.style.css';
const ModalCart = () => {
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
      <Button className='button-header' type="primary" onClick={showModal}>
      <ShoppingCartOutlined/>
      </Button>
      <Modal title="Your Cart" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>Add content</p>
      </Modal>
    </>
  );
};
export default ModalCart;