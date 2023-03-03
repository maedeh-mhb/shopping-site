import React, { useContext } from 'react';
import bag from '../../assets/icons/bag.svg';
import { CartContext } from '../../contexts/Cart.context';
import { CartIconContainer } from './Card.styles';

function CardIcon(props) {
    const {setOpen,total,isOpen} = useContext(CartContext);

    function openHandler(){
        setOpen(isOpen=>!isOpen)
    };

    return (
        <CartIconContainer  onClick={openHandler}>
            <img src={bag} style={{width:'2rem'}}/>
            <span>{total}</span>
        </CartIconContainer>
    );
}

export default CardIcon;