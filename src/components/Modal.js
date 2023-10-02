import React from "react";


const Modal = ({ show, onClose, children }) => {
  return (
    show && (
      <div className="modal-overlay">
        <div className="modal-dialog">
          <button className="modal-close" onClick={onClose}>
            Close
          </button>
          <p className="modal-p">{children}</p>
        </div>
      </div>
    )
  );
};

export default Modal;
