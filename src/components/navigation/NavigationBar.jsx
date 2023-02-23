import React, { Fragment } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import crownLogo from '../../assets/icons/crown.svg';
import MenuBar from './menu/MenuBar';
import classes from './Navigation.module.scss';

function NavigationBar(props) {
  
    
    return (
        <Fragment>
            
            <div className={classes.navContainer}>
                <div className={classes.logo}>
                    <NavLink 
                      className={({isActive}) => (isActive ? classes.activeLink : null)}
                      to={'/shop'}>
                       <img src={crownLogo} />
                    </NavLink>
                </div>
                <div className={classes.mainNav}>
                    <div className={classes.NavBar}>
                    <NavLink 
                    className={({isActive}) => (isActive ? classes.activeLink : null)}
                    to={'/'} >
                       <div>Home</div>
                    </NavLink>
                    <NavLink 
                    className={({isActive}) => (isActive ? classes.activeLink : null)}
                    to={'/shop'}>
                       <div>Shop</div>
                    </NavLink>
                    <NavLink 
                    className={({isActive}) => (isActive ? classes.activeLink : null)}
                    to={'/signIn'}>
                      <div>Sign In</div>
                    </NavLink>
                    <NavLink 
                    className={({isActive}) => (isActive ? classes.activeLink : null)}
                    to={'/contact'}>
                      <div>Contact</div>
                    </NavLink>
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