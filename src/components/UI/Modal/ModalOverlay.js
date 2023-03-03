import React from 'react';
import { Modal } from './Modal.styles';
const ModalOverlay = (props) => {
    
    return (
        
        <Modal>
            <div>
                {props.children}
            </div>
        </Modal>
    );
};

export default ModalOverlay;