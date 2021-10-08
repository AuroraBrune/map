import React from "react";
import "./style.css";

function Modal({ closeModal }) {

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button className="closeModBtn" onClick={() => closeModal(false)}>Close</button>
        </div>
        <div className="title">
          <h1>Map Page. Have fun.</h1>
        </div>
      </div>
    </div>
  )
}

export default Modal;