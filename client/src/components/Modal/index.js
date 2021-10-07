import React from "react";
import "./style.css";

function Modal({ closeModal }) {

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button onClick={() => closeModal(false)}>Close</button>
        </div>
        <div className="title">
          <h1>Map Page. Have fun.</h1>
        </div>
        <div className="footer" onClick={() => closeModal(false)}>Cancel</div>
        {/* <div>
          <button className="continueBtn">Continue</button>
        </div> */}
      </div>
    </div>
  )
}

export default Modal;