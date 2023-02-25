import React, { useContext } from 'react';
import bag from '../../assets/icons/bag.svg';
import { CartContext } from '../../contexts/Cart.context';
import classes from './Card.module.scss';

function CardIcon(props) {
    const {setOpen,total,isOpen} = useContext(CartContext);

    function openHandler(){
        setOpen(isOpen=>!isOpen)
    };

    return (
        <div className={classes['card-icon-container']}  onClick={openHandler}>
        <img src={bag} style={{width:'2rem'}}/>
        <span>{total}</span>
       </div>
    );
}

export default CardIcon;