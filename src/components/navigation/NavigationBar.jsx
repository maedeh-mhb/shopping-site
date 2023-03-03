import React, { Fragment, useContext } from 'react';
import { Outlet } from 'react-router-dom';
import shark from '../../assets/icons/shark.svg';
import { CartContext } from '../../contexts/Cart.context';
import { userContext } from '../../contexts/user.context';
import { onSignOut } from '../../utils/firebase/firebase.utils';
import DropDown from '../UI/menu/DropDown';
import MenuBar from './menu/MenuBar';
import { Logo, MainNav, MenuIcon, NavBar, NavContainer, StyledActiveLink  } from './Navigation.styles';

function NavigationBar(props) {
  
    const {currentuser} = useContext(userContext)
    const {isOpen,setOpen} = useContext(CartContext);

  
    return (
        <Fragment>
            
            <NavContainer>
                <Logo>
                    <StyledActiveLink  
                      to={'/'}
                      >
                       <img src={shark} />
                    </StyledActiveLink >
                </Logo>
                <MainNav>
                    <NavBar>
                    <StyledActiveLink  
                    
                    to={'/shop'} 
                    >
                       <div>Shop</div>
                    </StyledActiveLink >
                    <StyledActiveLink  
                    onClick={onSignOut}
                    
                    
                    to={'/signIn'}>
                      <div>{currentuser ? 'Sign Out' : 'Sign In'}</div>
                    </StyledActiveLink >
                    <StyledActiveLink  
                    
                    to={'/contact'}>
                      <div>Contact</div>
                    </StyledActiveLink >
                    <DropDown/>
                    </NavBar>
                    <MenuIcon>
                        <MenuBar />
                    </MenuIcon>

                </MainNav>
            </NavContainer>
            <Outlet/>
        </Fragment>
    );
}

export default NavigationBar;