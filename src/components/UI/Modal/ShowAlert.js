import React,{useEffect} from 'react';
import Button from '../button/Button';
import Modal from './Modal';
import classes from './Modal.module.scss';

function ShowAlert(props) {
    const {title,content,onClose} = props;
    let customClass=null;
    title === 'ERROR' ?  customClass ='error-title' : customClass = 'success-title'

    return (
        <Modal>
            <div>
                <h1 className={classes[customClass]}>{title}</h1>
                <div className={classes['modal-container']}>
                <span>{content}</span>
                <Button label="Close" onClick={onClose}/>
                </div>
            </div>
        </Modal>
    );
}

export default ShowAlert;