import { ShoppingCartOutlined } from '@ant-design/icons';
import React from 'react';
import Nav from 'react-bootstrap/Nav';
import './header.style.css';
import { Link } from 'react-router-dom';

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

const form = [{ href: '/login', title: 'Login' }];
function Header() {
  return (
    <div className="cover-header">
      <div>
        <img
          className="img-header"
          src="https://sgweb.vn/wp-content/uploads/2022/12/image1463.png"
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
          {form.map((value, index) => {
            return (
              <div key={index} as="li">
                <Link className="login" to={value.href}>
                  {value.title}
                </Link>
                <ShoppingCartOutlined />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Header;
