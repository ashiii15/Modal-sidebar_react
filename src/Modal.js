import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { useGlobalContex } from './context'
const Modal = () => {
const {isOpenModal,closeModal} =useGlobalContex()
  return <div className={`${isOpenModal?`modal-overlay show-modal`:`modal-overlay`}`}>
    <div className='modal-container'>
      <h3>iam modal</h3>
      <button onClick={closeModal} className='close-modal-btn'>
        <FaTimes/>
      </button>
    </div>

  </div>
}

export default Modal
