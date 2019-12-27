import React from "react";

function PopsInFunEXP1(props) {
  return (
    <div>
      Pops In Fun EXP1
      <p>{props.Name}</p>
      <p>{props.Id}</p>
    </div>
  );
}

export default PopsInFunEXP1;
PopsInFunEXP1.defaultProps = { Name: "JC" };
