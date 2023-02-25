import React, { Fragment, useContext } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import shark from '../../assets/icons/shark.svg';
import { userContext } from '../../contexts/user.context';
import { onSignOut } from '../../utils/firebase/firebase.utils';
import MenuBar from './menu/MenuBar';
import classes from './Navigation.module.scss';
import bag from '../../assets/icons/bag.svg';
import DropDown from '../UI/menu/DropDown';
import { CartContext } from '../../contexts/Cart.context';
import ClickOuter from '../gobals/ClickOuter';
import CardIcon from '../card/CardIcon';

function NavigationBar(props) {
  
    const {currentuser} = useContext(userContext)
    const {isOpen,setOpen} = useContext(CartContext);

  
    return (
        <Fragment>
            
            <div className={classes.navContainer}>
                <div className={classes.logo}>
                    <NavLink 
                      className={({isActive}) => (isActive ? classes.activeLink : null)}
                      to={'/shop'}>
                       <img src={shark} />
                    </NavLink>
                </div>
                <div className={classes.mainNav}>
                    <div className={classes.NavBar}>
                    <NavLink 
                    className={({isActive}) => (isActive ? classes.activeLink : null)}
                    to={'/'} >
                       <div>Shop</div>
                    </NavLink>
                    <NavLink 
                    onClick={onSignOut}
                    className={({isActive}) => (isActive ? classes.activeLink : null)}
                    to={'/signIn'}>
                      <div>{currentuser ? 'Sign Out' : 'Sign In'}</div>
                    </NavLink>
                    <NavLink 
                    className={({isActive}) => (isActive ? classes.activeLink : null)}
                    to={'/contact'}>
                      <div>Contact</div>
                    </NavLink>
                    <DropDown/>
                    </div>
                    <div className={classes.menuIcon}>
                        <MenuBar />
                    </div>

                </div>
            </div>
            <Outlet/>
        </Fragment>
    );
}

export default NavigationBar;