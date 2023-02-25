import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import menuIcon from '../../../assets/icons/menu.svg';
import ClickOuter from '../../gobals/ClickOuter';
import classes from './Menu.module.scss';

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
        <div className={classes.container} >
            <img 
                src={menuIcon} 
                alt='menu-icon' 
                onClick={onClick} />
            {
                openMenu ? (
                    
                    <div className={`${classes.menuBar} ${openMenu && classes.isOpen }`}>
            <ul>
                <li>
                    <NavLink 
                    to={'/'} 
                    className={({isActive}) => (isActive ? classes.activeLink : null)}
                    onClick={onClose}>
                        Shop
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to={'/contact'}
                    className={({isActive}) => (isActive ? classes.activeLink : null)}
                    onClick={onClose}>
                        Contact
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to={'/card'}
                    className={({isActive}) => (isActive ? classes.activeLink : null)}
                    onClick={onClose}>
                        Card
                    </NavLink>
                </li>
            </ul>

            </div>
                ) : null
            }
            
        </div>
    </ClickOuter>
    );
}

export default MenuBar;