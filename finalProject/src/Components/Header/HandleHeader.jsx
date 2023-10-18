import React from "react";
import "./header.style.css";
import Nav from "react-bootstrap/Nav";
function HandleHeader() {
  return (
    <div>
      <Nav className="header" as="ul">
        <img className="img-header" src="http://127.0.0.1:5500/Pictures/logo.png"/>
        <Nav.Item as="li">
          <Nav.Link className="navlink" href="/home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link className="navlink" href="/product">Product</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link className="navlink" href="detail">Detail</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link className="navlink" href="Cart">Cart and Payment</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link className="navlink" href="#">Contact</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default HandleHeader;
