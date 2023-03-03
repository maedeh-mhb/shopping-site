import styled from 'styled-components';

export const CheckoutContainer = styled.div `
display: flex;
    margin: 100px auto;
    flex-direction: column;
    width: 70%;
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
    border-radius: 10px;
    border: 2px solid white;
    padding: 2.5rem;
    box-shadow: -29px -14px 28px 10px rgba(0,0,0,0.1);
`
export const TitleContainer = styled.div `
    display: flex;
    width: 100%;
    justify-content: space-between;
    color: white;
    padding-bottom: 1rem;
    border-bottom: 1px solid white;
`

export const Empty = styled.span `
color:white;
    margin: 3rem auto;
    button {
        margin-top: 3rem;
        background-color: #474E49 !important;
        color: white;
        &:hover {
            background-color:   #212121 !important;
            
        }
    }
`


export const Footer = styled.footer `
    color: white;
    margin-top: 3rem;
`
