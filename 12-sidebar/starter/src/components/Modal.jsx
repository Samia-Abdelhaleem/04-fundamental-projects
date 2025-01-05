import React from "react";
import { useGlobalContext } from "../context/globalContext";
import { FaTimes } from "react-icons/fa";

const Modal = () => {
  const { isModalOpen, closeModal } = useGlobalContext();
  console.log(isModalOpen);
  return (
    <div className={isModalOpen ? "modal-overlay show-modal" : "modal-overlay"}>
      <div className="modal-container">
        <h3>Modal content</h3>
        <button className="close-modal-btn" onClick={closeModal}>
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default Modal;
