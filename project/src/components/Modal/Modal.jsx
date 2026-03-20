import React from 'react';
import './Modal.css';  // 스타일 파일

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null; // 모달이 열리지 않으면 아무것도 렌더링하지 않음

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close-btn" onClick={onClose}>
          X
        </button>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
};

export default Modal;