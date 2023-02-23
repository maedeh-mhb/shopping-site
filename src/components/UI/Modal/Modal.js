import React from 'react';
import ReactDOM from 'react-dom';
import Backdrop from './Backdrop';
import ModalOverlay from './ModalOverlay';

const portalElement = document.getElementById('backdrop');
const Modal = (props) => {
console.log('modal is rendered')
    return (
    <>
     {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
    );
};

export default Modal;