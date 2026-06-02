// import React from "react";

const Securitybadge = (props) => {
  const style = {
  color: "blue",
  height: "200px",         
  border: "10px solid black",
  backgroundColor: "red",
  margin:'10px',
};

  return (
    <div style={style}>
      <h2>Name = {props.name}</h2>
      <h2>Role = {props.role}</h2>
      <h2>clearanceLevel ={props.sec}</h2>
    </div>
  );
};

export default Securitybadge;
