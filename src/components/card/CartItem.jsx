import { ItemContainer, ItemCountContainer,ItemImageContainer } from './Card.styles';

function CartItem({product}) {
    const {name,imageUrl,quantity,price} = product;

    return (
        <ItemContainer>
            <ItemImageContainer>
               <img src={imageUrl}/>
            </ItemImageContainer>
            <ItemCountContainer>
                <span>{name}</span>
                <span>{quantity} x {price} $</span>
            </ItemCountContainer>
        </ItemContainer>
    );
}

export default CartItem;