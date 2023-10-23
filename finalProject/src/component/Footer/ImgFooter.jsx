import React from "react";

function ImgFooter(props) {
  return (
    <div className="handle-img">
      <img className="img-footer" src={props.image} alt="" />
      <p>{props.title}</p>
    </div>
  );
}

export default ImgFooter;
