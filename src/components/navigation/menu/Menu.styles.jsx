import { NavLink } from 'react-router-dom';
import styled,{css } from 'styled-components';

export const MenuContainer = styled.div `
display: flex;
flex-direction: column;
align-items: center;
img {
    cursor: pointer;
}
`
export const StyledMenuBar = styled.div `
   position: absolute;
    z-index: 12;
    overflow: hidden;
    opacity: 0;
   ul {
    padding: 7px ;
    width: 70px;
    background: rgba( 132, 133, 164, 0.1 );
    backdrop-filter: blur( 0px );
    -webkit-backdrop-filter: blur( 0px );
    border-radius: 2px;
    font-size: var(--size-3);
   }
    li{
        font-size: var(--size-3);
        list-style: none;
        margin-bottom: 5px;
        :hover {
            opacity: 0.5;
        }
    } 
    a {
        text-decoration: none;
    color: var(--text-color);
    };
    ${props => props.isOpen && css `
    opacity: 1;
        animation: slide-down 400ms ease-out forwards;
        @keyframes slide-down {
            from {
              opacity: 0;
              transform: translateY(0rem);
            }
            to {
              opacity: 1;
              transform: translateY(1.5rem);
            }
          
        }
    `} 
`

export const IsOpen = styled.div `
    opacity: 1;
    animation: slide-down 400ms ease-out forwards;
    @keyframes slide-down {
        from {
          opacity: 0;
          transform: translateY(0rem);
        }
        to {
          opacity: 1;
          transform: translateY(1.5rem);
        }
      
    }
`
export const ActiveLink =styled.div `
          &.active {
            opacity: 0.5;
          };
`

export const StyledMenuNavLink = styled(NavLink) `
  &.active {
    opacity: 0.5;
  };     

`

