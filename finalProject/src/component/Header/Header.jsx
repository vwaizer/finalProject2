import { UserOutlined } from '@ant-design/icons';
import React from 'react';
import { Link } from 'react-router-dom';
import ModalCart from './ModalCart';
import './header.style.css';

const infomation = [
  {
    href: '/',
    title: 'Home',
  },
  {
    href: '/product',
    title: 'Product',
  },
  {
    href: '/Cart',
    title: 'Cart and Payment',
  },
];

function Header() {
  return (
    <div className="cover-header">
      <div>
        <img
          className="img-header"
          src="https://github.com/Mateo-codeMaxi/Ecomerce-Furniture.github.io/blob/main/TEMPLATE%20-%20FURNITURE%20STORE/img/logo.png?raw=true"
          alt="#"
        />
      </div>
      <div className="header" as="ul">
        {infomation.map((item, index) => {
          return (
            <div key={index} as="li">
              <Link className="navlink" to={item.href}>
                {item.title}
              </Link>
            </div>
          );
        })}

        <div className="side-login">
          <Link className="login" to="/login">
            <UserOutlined />
          </Link>
          <ModalCart />
        </div>
      </div>
    </div>
  );
}

export default Header;
