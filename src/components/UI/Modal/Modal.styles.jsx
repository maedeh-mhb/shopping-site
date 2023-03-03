import styled from 'styled-components';


export const BackdropContainer = styled.div `
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 20;
  background-color: rgba(0, 0, 0, 0.75);
`
export const Modal = styled.div `
  position: fixed;
  top: 20vh;
  left: 5%;
  width: 90%;
  color:white;
  background-color:  rgba(71, 91, 100, 0.9);
  padding: 1rem;
  border-radius: 14px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 30;
  animation: slide-down 300ms ease-out forwards;
  @media (min-width: 768px) {
      width: 40rem;
      left: calc(50% - 20rem);
  };
  @keyframes slide-down {
    from {
      opacity: 0;
      transform: translateY(-3rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
`
export const ErrorTitle = styled.div `
    color: ${props => props.status ==='error' ? 'red' : 'green'};
    font-size:2rem;
    margin-bottom:2rem
     
` 

export const ModalContainer = styled.div `
    display: flex;
    justify-content: space-between;
`  

