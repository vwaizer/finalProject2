import React from "react";

function Orther(props) {
  return (
    <>
      <div className="orther">
        <h3 className="h3footer">{props.title}</h3>
        <input
          className="input-footer"
          type={props.inputType}
          placeholder={props.placeholder}
        />
        <div className="under">
          <li>
            <a className="link-footer" href="#">
              {props.first}
            </a>
          </li>
          <li>
            <a className="link-footer" href="#">
              {props.second}
            </a>
          </li>
          <li>
            <a className="link-footer" href="#">
              {props.third}
            </a>
          </li>
        </div>
      </div>
    </>
  );
}

export default Orther;
