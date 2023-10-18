import React from "react";

function HelpBox(props) {
  return (
    <div>
      <h2 className="h2footer">{props.title}</h2>
      <li>
        <a className="link-footer" href="#">
          {props.textone}
        </a>
      </li>
      <br />
      <li>
        <a className="link-footer" href="#">
          {props.texttwo}
        </a>
      </li>
      <br />
      <li>
        <a className="link-footer" href="#">
          {props.textthree}
        </a>
      </li>
      <br />
      <li>
        <a className="link-footer" href="#">
          {props.textfour}
        </a>
      </li>
      <br />
      <li>
        <a className="link-footer" href="#">
          {props.textfive}
        </a>
      </li>
    </div>
  );
}

export default HelpBox;