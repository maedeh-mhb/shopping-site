import React, { useContext } from 'react';
import { CartContext } from '../../contexts/Cart.context';
import {CardContainer,Price,PriceContainer,Title,ImageContainer,IconContainer} from './Card.styles';

function Card({product}) {
    const {name,imageUrl,price,id} =product;
    const {addItems} = useContext(CartContext);

    function onAdd(product) {
        addItems(product);
        
    }
  
    return (
        <CardContainer>
            <PriceContainer>
                <Price>
                {price} $ 
               </Price>
                <IconContainer onClick={()=>onAdd(product)}>
                   Add To Card
                </IconContainer>
            </PriceContainer>
          
            <ImageContainer>
               <img src={imageUrl} />
            <Title>
               {name}
            </Title>
            </ImageContainer>
        </CardContainer>
    );
}

export default Card;