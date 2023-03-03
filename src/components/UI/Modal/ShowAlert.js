import React from 'react';
import Button from '../button/Button';
import Modal from './Modal';
import { ModalContainer,ErrorTitle} from './Modal.styles';

function ShowAlert(props) {
    const {title,content,onClose} = props;
    let customClass=null;
    title === 'ERROR' ?  customClass ='error' : customClass = 'success'

    return (
        <Modal>
            <div>
                <ErrorTitle status={customClass}>{title}</ErrorTitle>
                <ModalContainer>
                <span>{content}</span>
                <Button label="Close" onClick={onClose}/>
                </ModalContainer>
            </div>
        </Modal>
    );
}

export default ShowAlert;