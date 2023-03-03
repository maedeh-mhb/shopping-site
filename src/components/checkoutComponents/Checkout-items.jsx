
import { useContext } from 'react';
import { CartContext } from '../../contexts/Cart.context';
import {CheckoutItemContainer} from './CheckoutItem.styles.jsx';

function CheckoutItems(props) {
    
const {product: {name,imageUrl,quantity,price,id}} = props;
const {removeItem}  = useContext(CartContext);

function removeHandler(id) {
  removeItem(id)
}
    return (
        <CheckoutItemContainer>
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
        </CheckoutItemContainer>
    );
}

export default CheckoutItems;