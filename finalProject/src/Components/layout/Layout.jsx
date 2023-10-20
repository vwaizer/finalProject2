import React from "react";
import Footer from "../footer/Footer";
import Header from '../header/Header'
function Layout(props) {
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
}

export default Layout;
