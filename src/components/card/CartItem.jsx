import classes from './Card.module.scss';

function CartItem({product}) {
    const {name,imageUrl,quantity,price} = product;

    return (
        <div className={classes['item-container']}>
            <span  className={classes['item-image-container']}>
               <img src={imageUrl}/>
            </span>
            <span  className={classes['item-count-container']}>
                <span>{name}</span>
                <span>{quantity} x {price} $</span>
            </span>
        </div>
    );
}

export default CartItem;