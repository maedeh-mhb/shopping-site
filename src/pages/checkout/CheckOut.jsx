import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import CheckoutItems from '../../components/checkoutComponents/Checkout-items';
import Button from '../../components/UI/button/Button';
import { CartContext } from '../../contexts/Cart.context';
import { CheckoutContainer, Empty, Footer, TitleContainer } from './Checkout.styles.jsx';

function CheckOut(props) {
    const{cardItems,total,totalPrice} =useContext(CartContext);
    const navigate= useNavigate()
    return (
        <CheckoutContainer>
            <TitleContainer>
            <span>Product</span>
            <span>Description</span>
            <span>Quantity</span>
            <span>Price</span>
            <span>Remove</span>
            </TitleContainer>
            {
               total!== 0 ? cardItems.map((item)=><CheckoutItems key={item.id} product={item}/>) : <Empty>
                Your Cart Is Empty
                <Button  label="Back To Shop" onClick={()=>navigate('/shop')}/>
               </Empty>
            }
            <Footer>
                {total!==0 && `Total:  ${totalPrice} $` }
            </Footer>
        </CheckoutContainer>
    );
}

export default CheckOut;