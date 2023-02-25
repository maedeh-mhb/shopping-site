import { useContext,useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CartContext } from '../../../contexts/Cart.context';
import CardIcon from '../../card/CardIcon';
import CartItem from '../../card/CartItem';
import ClickOuter from '../../gobals/ClickOuter';
import Button from '../button/Button';
import classes from './DropDown.module.scss';

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
                isOpen ?  <div className={classes.container} >
                <div className={classes.innerContainer}>
                {total !==0 ? <>
                    {cardItems.map((item)=><CartItem key={item.id} product={item}/>)}
                    <Button label="Go To Check Out" className={classes.buttonContainer } disable={total === 0} onClick={onNavigate}/>
                </>
                 :
                 <span style={{color:'white',margin:'20px auto'}}>Your Cart Is Empty</span> }
                
                </div>
            </div> : null
            }
       
        </ClickOuter>
    );
}

export default DropDown;