import React from "react";

function PopsDefaultInFunEXP1(props) {
  return (
    <div>
      Pops In Fun EXP1
      <p>{props.Name}</p>
      <p>{props.Id}</p>
    </div>
  );
}

export default PopsDefaultInFunEXP1;
PopsDefaultInFunEXP1.defaultProps = { Name: "JC", Id: 101 };
