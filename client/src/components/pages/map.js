import React, { useState } from "react";
import Modal from "../Modal";
import Footer from "../Footer";

const Map = () => {
 const [modalIsOpen, setModalIsOpen] = useState(false);
 const [disable, setDisable] = React.useState(false);
 //disables/enables modal button when modal is open/closed
 React.useEffect(() => {
  if (modalIsOpen) {
   setDisable(true);
  } else {
   setDisable(false)
  }
 }, [modalIsOpen]);

 if (modalIsOpen) { }
 return (
  <div>
   <div className="modBtn">
     <button id="openModBtn" disabled={disable} type="button" className="openModalBtn" onClick={() => { setModalIsOpen(true); setDisable(true) }} >Open Map</button>
     {modalIsOpen && <Modal closeModal={setModalIsOpen} />}
   </div>
     <Footer />
  </div>
 );
 }

export default Map;