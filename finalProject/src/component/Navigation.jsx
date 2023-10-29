import React from 'react';
import { Button, Dropdown } from 'antd';
import './CarouseItem.css';
const items = [
  {
    key: '1',
    label: (
      <a className="a-navigate" href="#collection">
        Colection
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a className="a-navigate" href="#Best Seller">
        Best Seller
      </a>
    ),
  },
  {
    key: '3',
    label: (
      <a className="a-navigate" href="#Bedding">
        Bedding Products
      </a>
    ),
  },
  {
    key: '4',
    label: (
      <a className="a-navigate" href="#Sofa">
        Sofa Products
      </a>
    ),
  },
  {
    key: '5',
    label: (
      <a className="a-navigate" href="#Desk">
        Desk Products
      </a>
    ),
  },
  {
    key: '6',
    label: (
      <a className="a-navigate" href="#Dining">
        Dining Table Products
      </a>
    ),
  },
  {
    key: '7',
    label: (
      <a className="a-navigate" href="#Cabinet">
        Shoe Cabinet
      </a>
    ),
  },
  {
    key: '8',
    label: (
      <a className="a-navigate" href="#Makeup">
        Makeup Table
      </a>
    ),
  },
];
const Navigation = () => {
  return (
    <>
      <Dropdown
        menu={{
          items,
        }}
        placement="bottomCenter"
        arrow={{
          pointAtCenter: true,
        }}
      >
        <Button className="list-product">List Production</Button>
      </Dropdown>
    </>
  );
};
export default Navigation;
