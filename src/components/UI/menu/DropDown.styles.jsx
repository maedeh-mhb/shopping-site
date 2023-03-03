import styled, { keyframes } from 'styled-components';
import { ButtonContainer } from '../button/Button.styles';


const slide = keyframes`
    0% {
      opacity: 0;
      transform: translateY(0rem);
    }

    100% {
      opacity: 1;
      transform: translateY(0.5rem);
    }
`


 export const DropDownContainer= styled.div `position: absolute;
    top: 45px;
    right: 12rem;
    z-index: 100;
    opacity: 1;
    max-height:20rem;
    overflow-y:auto;
    ::-webkit-scrollbar { background: none; };
    ::-webkit-scrollbar-thumb {  background: #474E49; 
      border-radius: 15px;
     };
    top:3rem;
    animation: ${slide} 0.5s forwards !important;
    width: 300px;
    background-image: linear-gradient(
      45deg,
      hsl(132deg 6% 17%) 0%,
      hsl(132deg 6% 16%) 11%,
      hsl(132deg 6% 16%) 22%,
      hsl(131deg 7% 15%) 33%,
      hsl(131deg 7% 15%) 44%,
      hsl(131deg 7% 15%) 56%,
      hsl(131deg 8% 14%) 67%,
      hsl(130deg 8% 14%) 78%,
      hsl(130deg 9% 13%) 89%,
      hsl(130deg 9% 13%) 100%
    );
    border: 1px solid white;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    padding: 10px;
    justify-content: space-between;


}
` 

export const DropDownInnerContainer =styled.div `
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  
  ${ButtonContainer} {
    button {
      background-color: #474E49 !important;
      color: white !important;
      &:hover:enabled {
          background-color: #212121 !important;
      }
    
    }
  }
`
export const EmptyCart = styled.span `
  color:white;
  margin:20px auto
`
