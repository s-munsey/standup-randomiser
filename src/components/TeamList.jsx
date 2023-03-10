import React from "react";

const TeamList = (props) => {
  return (
    <>
      <h1>Team</h1>
      <ul>{props.items}</ul>
    </>
  );
};

export default TeamList;
