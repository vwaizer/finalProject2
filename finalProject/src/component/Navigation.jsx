import React from 'react';
import { Button, Dropdown } from 'antd';
import './CarouseItem.css';
const items = [
  {
    key: '1',
    label: <a className='a-navigate' href="#collection">Colection</a>,
  },
  {
    key: '2',
    label: <a className='a-navigate' href="#best">Best Seller</a>,
  },
  {
    key: '3',
    label: <a className='a-navigate' href="#outstanding">Outstanding</a>,
  },
  {
    key: '4',
    label: <a className='a-navigate' href="#Favorite">User Favaorite</a>,
  },
  {
    key: '5',
    label: <a className='a-navigate' href="#Other">Another</a>,
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
