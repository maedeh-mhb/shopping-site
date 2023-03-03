import { useContext, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CartContext } from '../../../contexts/Cart.context';
import CardIcon from '../../card/CardIcon';
import CartItem from '../../card/CartItem';
import ClickOuter from '../../gobals/ClickOuter';
import Button from '../button/Button';
import { DropDownContainer, DropDownInnerContainer,EmptyCart } from './DropDown.styles';

function DropDown(props) {
    const {cardItems,total,isOpen,setOpen} = useContext(CartContext);
    const navigate=useNavigate();
    function onNavigate() {
        navigate('/checkout')
    };
    const location=useLocation();

    useEffect(()=>{
        setOpen(false);
    },[location.pathname]);
   

    return (
        <ClickOuter isOpen={isOpen} setIsOpen={setOpen}>
            <CardIcon />
            {
                isOpen ?  <DropDownContainer>
                <DropDownInnerContainer>
                {total !==0 ? <>
                    {cardItems.map((item)=><CartItem key={item.id} product={item}/>)}
                    <Button label="Go To Check Out"  disable={total === 0} onClick={onNavigate}/>
                </>
                 :
                 <EmptyCart>Your Cart Is Empty</EmptyCart> }
                
                </DropDownInnerContainer>
            </DropDownContainer> : null
            }
       
        </ClickOuter>
    );
}

export default DropDown;