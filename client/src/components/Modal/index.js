import React from "react";
import "./style.css";
import Pin from "../Pin/index";

const p = document.querySelector('#marker');

function Modal({ closeModal }) {
  
  function placePin(x_pos, y_pos) {
    p.style.position = "absolute";
    p.style.left = x_pos+'px';
    p.style.top = y_pos+'px';
  }

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button className="closeModBtn" onClick={() => closeModal(false)}>Close</button>
        </div>
        <div className="title">
          <h1>Select a pin to place on the map.</h1>
        </div>
          <div className="pinContainer">
            <div className="redPin pin" style={{color:'red'}}><Pin/></div>
            <div className="bluePin pin" style={{ color: 'blue' }}><Pin /></div>
            <div className="yellowPin pin" style={{ color: 'yellow' }}><Pin/></div>
            <div className="blackPin pin" style={{ color: 'black' }}><Pin/></div> 
          </div>
        
      </div>
      </div>
  );
}

export default Modal;