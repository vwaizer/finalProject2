import React from "react";
import "./header.style.css";
import Nav from "react-bootstrap/Nav";
import { ShoppingCartOutlined } from "@ant-design/icons";
function HandleHeader() {
  return (
    <div>
      <Nav className="header" as="ul">
        <img className="img-header" src="" alt="" />
        <Nav.Item as="li">
          <Nav.Link className="navlink" href="/home">
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link className="navlink" href="/product">
            Product
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link className="navlink" href="/Cart">
            Cart and Payment
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link className="navlink" href="#">
            Contact
          </Nav.Link>
        </Nav.Item>
        <div className="side-login">
          <Nav.Item as="li">
            <Nav.Link className="side-login" href="#">
              Login
            </Nav.Link>
          </Nav.Item>
          <ShoppingCartOutlined />
        </div>
      </Nav>
    </div>
  );
}

export default HandleHeader;
