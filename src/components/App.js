
import React, { useState } from 'react';
import './../styles/App.css';
import Modal from './Modal';

const App = () => {
  const [modalShow, setModalShow] = useState(false);

  const handleCloseModal = () => {
    setModalShow(false);
  };

  return (
    <div>
      <button onClick={() => setModalShow(true)}>Show Modal</button>
      
      <Modal show={modalShow} onClose={handleCloseModal}>
        This is the content of the modal.
      </Modal>
      
    </div>
  );
};

export default App







  

