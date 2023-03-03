import styled from 'styled-components';
import {NavLink,Link} from 'react-router-dom';

export const NavContainer = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 80%;
    margin: 10px auto;
`


export const MainNav = styled.div `
    width: 40%;
    display: flex;
    @media screen and (max-width: 768px) {
        justify-content: flex-end;
     }
`

export const NavBar = styled.div `
    font-size: var(--size-3);
     display: flex;
     width: 100%;
     align-items: center;
     justify-content: space-evenly;
     font-family: 'Jost', sans-serif;
     @media screen and (max-width: 768px) {
        display: none;
     }
`
export const StyledActiveLink  = styled(NavLink) `
        text-decoration: none;
         color: var(--text-color);
         &.active {
            opacity: 0.5;
          };
         :hover {
             opacity: 0.5;
         };

`
export const Logo = styled(NavLink) `
    img{
         width: 3.5rem;
         height: 3rem;
     }    
`

export const MenuIcon = styled(Link) `
       display: none;
     img{
         width: 3.5rem;
         height: 3rem;
     };
     @media screen and (max-width: 768px) {
        display: block;
     }
`


// .mainNav {
//     width: 40%;
//     display: flex;
//     // max-height: 20px;
// }
// .NavBar {
//     font-size: var(--size-3);
//     display: flex;
//     width: 100%;
//     align-items: center;
//     justify-content: space-evenly;
//     font-family: 'Jost', sans-serif;
    
//     a{
//         text-decoration: none;
//         color: var(--text-color);
//         :hover {
//             opacity: 0.5;
//         }
//     }
// }
// .activeLink  {
//     opacity: 0.5;
   
    
// }
// .logo img{
//     width: 3.5rem;
//     height: 3rem;
// }    
// .menuIcon {
//     display: none;
//     img{
//         width: 3.5rem;
//         height: 3rem;

//     }
// }       

// @media screen and (max-width: 768px) {
//     .NavBar{
//         display: none;
//       }
//     .mainNav {
//         justify-content: flex-end;
//     }
//     .menuIcon {
//         display: block;
//     }
//   }

//   .cardIcon {
//     position: relative;
//     cursor: pointer;
    
//   };
  
