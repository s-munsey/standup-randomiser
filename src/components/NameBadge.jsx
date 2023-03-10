import React from "react";

const NameBadge = (props) => {
  return (
    <div className="namebadge">
      <div className="namebadge-top">Hello, my name is:</div>
      <div className="namebadge-middle">{props.name}</div>
      <div className="namebadge-bottom"></div>
    </div>
  );
};

export default NameBadge;
