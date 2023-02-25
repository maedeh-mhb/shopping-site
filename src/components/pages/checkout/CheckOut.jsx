import classes from './Checkout.module.scss';
import { useContext } from 'react';
import Button from '../../UI/button/Button';
import CheckoutItems from '../../checkoutComponents/Checkout-items';
import { CartContext } from '../../../contexts/Cart.context';
import {useNavigate} from 'react-router-dom'

function CheckOut(props) {
    const{cardItems,total,totalPrice} =useContext(CartContext);
    const navigate= useNavigate()
    return (
        <div className={classes['checkout-container']}>
            <div className={classes['title-container']}>
            <span>Product</span>
            <span>Description</span>
            <span>Quantity</span>
            <span>Price</span>
            <span>Remove</span>
            </div>
            {
               total!== 0 ? cardItems.map((item)=><CheckoutItems key={item.id} product={item}/>) : <span className={classes['empty']}>
                Your Cart Is Empty
                <Button  label="Back To Shop" onClick={()=>navigate('/shop')}/>
               </span>
            }
            <footer>
                {total!==0 && `Total:  ${totalPrice} $` }
            </footer>
        </div>
    );
}

export default CheckOut;