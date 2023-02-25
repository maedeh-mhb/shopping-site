import React, { useContext } from 'react';
import classes from './Card.module.scss';
import card from '../../assets/icons/card.svg';
import { CartContext } from '../../contexts/Cart.context';

function Card({product}) {
    const {name,imageUrl,price,id} =product;
    const {addItems} = useContext(CartContext);

    function onAdd(product) {
        addItems(product);
        
    }
   
    return (
        <div className={classes.container}>
            <div className={classes.priceContainer}>
                <span className={classes.price}>
                {price} $ 
               </span>
                <span className={classes.iconContainer} onClick={()=>onAdd(product)}>
                   Add To Card
                </span>
            </div>
          
            <div className={classes.imgContainer}>
               <img src={imageUrl} />
            <span className={classes.title}>
               {name}
            </span>
            </div>
        </div>
    );
}

export default Card;