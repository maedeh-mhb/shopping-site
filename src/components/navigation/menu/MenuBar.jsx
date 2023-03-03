import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import menuIcon from '../../../assets/icons/menu.svg';
import ClickOuter from '../../gobals/ClickOuter';
import { StyledMenuBar, MenuContainer,StyledMenuNavLink } from './Menu.styles.jsx';

function MenuBar(props) {
    const [openMenu,setOpenMenu] = useState(false);
    const [value,setValue] = useState('');
    const location=useLocation();

    useEffect(()=>{
        setOpenMenu(false);
    },[location.pathname]);

    function onClick() {
      setOpenMenu(!openMenu);
    }
    
    function onClose() {
        setOpenMenu(false);
    }

    return (
    <ClickOuter isOpen={openMenu} setIsOpen={setOpenMenu}>
        <MenuContainer>
            <img 
                src={menuIcon} 
                alt='menu-icon' 
                onClick={onClick} />
            {
                openMenu ? (
                    
                    <StyledMenuBar isOpen={openMenu}>
            <ul>
                <li>
                    <StyledMenuNavLink 
                    to={'/'} 
                    
                    onClick={onClose}>
                        Home
                    </StyledMenuNavLink>
                </li>
                <li>
                    <StyledMenuNavLink 
                    to={'/shop'} 
                    
                    onClick={onClose}>
                        Shop
                    </StyledMenuNavLink>
                </li>
                <li>
                    <StyledMenuNavLink 
                    to={'/contact'}
                    
                    onClick={onClose}>
                        Contact
                    </StyledMenuNavLink>
                </li>
                <li>
                    <StyledMenuNavLink 
                    to={'/checkout'}
                    
                    onClick={onClose}>
                        Card
                    </StyledMenuNavLink>
                </li>
            </ul>

            </StyledMenuBar>
                ) : null
            }
            
        </MenuContainer>
    </ClickOuter>
    );
}

export default MenuBar;