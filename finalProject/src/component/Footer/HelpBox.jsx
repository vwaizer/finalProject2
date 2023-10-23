import React from "react";

const helpBox = ["FAQs","Pricing Plans","Track","Your Order","My Account"]

function HelpBox(props) {
  return (
    <div>
      <h2 className="h2footer">{props.title}</h2>
      {helpBox.map((item,index) => {
        return(
          <li className="li-footer"  key={index}>
        <a className="link-footer" href="#">
          {item}
        </a>
      </li>
        )
      })}
    </div>
  );
}

export default HelpBox;
