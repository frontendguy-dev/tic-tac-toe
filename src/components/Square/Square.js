import React from "react";
import "./Square.css";

const Square = ({ value, handleClick, isX, winner }) => {
  const [squareVal, setValue] = React.useState("");
	
  const clickHandler = (val) => {
		if(winner) return;
		if(squareVal) return;

    setValue(isX ? "X" : "O");
    handleClick(val);
  };

  return (
    <div className="square" onClick={() => clickHandler(value)}>
      <div style={{position: 'relative', alignContent: 'center'}}>{squareVal}</div>
    </div>
  );
};

export default Square;
