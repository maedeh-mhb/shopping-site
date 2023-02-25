
import { useContext } from 'react';
import { CartContext } from '../../contexts/Cart.context';
import classes from './CheckoutItem.module.scss';

function CheckoutItems(props) {
    
const {product: {name,imageUrl,quantity,price,id}} = props;
const {removeItem}  = useContext(CartContext);

function removeHandler(id) {
  removeItem(id)
}
    return (
        <div className={classes['checkout-container']}>
          <span>
            <img src={imageUrl}/>
          </span>
          <span>
            {name}
          </span>
          <span>
           { `<${quantity}>`}
          </span>
          <span>
            {price}
          </span>
          <span style={{cursor:'pointer'}} onClick={removeHandler.bind(null,id)}>
            &#10005;
          </span>
        </div>
    );
}

export default CheckoutItems;