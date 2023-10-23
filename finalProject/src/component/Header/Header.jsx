import { ShoppingCartOutlined } from "@ant-design/icons";
import React from "react";
import Nav from "react-bootstrap/Nav";
import "./header.style.css";

const infomation = [
  {
    href: "/",
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
    href: "#",
    title: "Contact",
  },
];

const form = [
  { href: "/login", title: "Login" },
];
function Header() {
  return (
    <div>
      <Nav className="header" as="ul">
      <div>
        <img className="img-header" src="https://sgweb.vn/wp-content/uploads/2022/12/image1463.png"  alt=""/>
      </div>
        {infomation.map((item, index) => {
          return (
            <Nav.Item key={index} as="li">
              <Nav.Link className="navlink" href={item.href}>
                {item.title}
              </Nav.Link>
            </Nav.Item>
          );
        })}
        <div className="side-login">
          {form.map((value, index) => {
            return (
              <Nav.Item as="li">
                <Nav.Link className="navlink" href={value.href}>
                  {value.title}
                </Nav.Link>
              </Nav.Item>
            );
          })}
          <ShoppingCartOutlined />
        </div>
      </Nav>
    </div>
  );
}

export default Header;
