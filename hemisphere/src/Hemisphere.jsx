import React from "react";
import northPic from "./image/north.jpg";
import southPic from "./image/south.jpg";

function Hemisphere(props) {
  const currenthemisphere =
    props.latitude > 0 ? "Northern hemisphere" : "Southern hemisphere";
  const picture = props.latitude > 0 ? northPic : southPic;
  return (
    <div>
      <h1>{currenthemisphere} </h1>
      <img src={picture} alt="" />
      
    </div>
  );
}

export default Hemisphere;

