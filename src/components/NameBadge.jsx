import React from "react";

const NameBadge = (props) => {
  return (
    <div className="namebadge">
      <div className="namebadge-top">Hello, my name is:</div>
      <div className="namebadge-middle">
        <div className={props.isShowing ? "fadeIn" : "hide"}>{props.name}</div>
      </div>
      <div className="namebadge-bottom"></div>
    </div>
  );
};

export default NameBadge;
