import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import Draggable from "react-draggable";
import "./style.css";

function Pin() {
return (
 <Draggable id="marker">
  <FaMapMarkerAlt className="pinIcon"/>
 </Draggable>
);
}

export default Pin;