import React from 'react';
import { Button, Dropdown } from 'antd';
import './Carouse/CarouseItem.css';
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
  {
    key: '9',
    label: (
      <a className="a-navigate" href="#chair">
        Chairs
      </a>
    ),
  },
  {
    key: '10',
    label: (
      <a className="a-navigate" href="#vanity">
        Bathroom vanity
      </a>
    ),
  },
];
const Navigation = () => {
  return (
    <div className='navlist'>
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
    </div>
  );
};
export default Navigation;
