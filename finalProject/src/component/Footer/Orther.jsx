import React from "react";

const other = ["Term & Condition","Policy","Map"]
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
          {other.map((element,index) => {
            return(
              <li key={index}>
            <a className="link-footer" href="#">
              {element}
            </a>
          </li>
            )
          })}
        </div>
      </div>
    </>
  );
}

export default Orther;
