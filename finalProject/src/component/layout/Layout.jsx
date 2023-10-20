import React from "react";
import Footer from "../Footer/Footer";
import Header from '../Header/Header'
import HandleHeader from "../Header/HandleHeader";
function Layout(props) {
  return (
    <div>
      <HandleHeader/>
      {props.children}
      <Footer />
    </div>
  );
}

export default Layout;
