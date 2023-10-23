import React from "react";

const aboutUs = ["Our Story","Job Opportunities","Store Locator","Contact Us"]
function AboutUsBox(props) {
  return (
    <div>
      <h2 className="h2footer">{props.title}</h2>
      {aboutUs.map((value,index) => {
        return <li className="li-footer" key={index}>
        <a className="link-footer" href="#">
          {value}
        </a>
      </li>
      })}
    </div>
  );
}

export default AboutUsBox;
