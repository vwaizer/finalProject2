import React from "react";
import "./header.style.css";
import Nav from "react-bootstrap/Nav";
import { ShoppingCartOutlined } from "@ant-design/icons";
const infomation = [
  {
    href: "/home",
    title: "Home",
  },
  {
    href: "/product",
    title: "Product",
  },
  {
    href: "/Cart",
    title: "Cart and Payment",
  },
  {
    href: "/Contact",
    title: "Contact",
  },
  {
    href: "/Login",
    title: "Login",
  },
];
function HandleHeader() {
  return (
    <div>
      <Nav className="header" as="ul">
        {infomation.map((item,index) => {
          return (
            <Nav.Item key={index} as="li">
              <Nav.Link className="navlink" href={item.href}>
                {item.title}
              </Nav.Link>
            </Nav.Item>
          );
        })}
          <ShoppingCartOutlined />
      </Nav>
    </div>
  );
}

export default HandleHeader;
