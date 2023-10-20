import React from "react";
import Footer from "../footer/Footer";
import Header from '../Header/Header'
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
