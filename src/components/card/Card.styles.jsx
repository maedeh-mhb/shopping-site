import styled, { keyframes } from 'styled-components'

const slide = keyframes`
     100% { top: 0; }
};
`

export const PriceContainer = styled.div `
    width: 100%;
    position: absolute;
    left: 0;
    top: -50px;
    background-color: rgb(47, 53, 48);
    padding: 0.7rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    img{
    width: 20px;
 
}

`

export const CardContainer = styled.div `
    border-radius: 30px;
    padding: 1.5rem;
    padding-top: 3rem;
    box-sizing: border-box;
    background:rgba(225,225,225,0.1);
    width: 100%;
    min-height: 70px;
    position: relative;
    color: white;
    cursor: pointer;
    overflow: hidden;
    &:hover{
    -webkit-box-shadow: 1px 1px 5px 4px rgb(19, 22, 23);
    -moz-box-shadow: 1px 1px 5px 4px rgb(19, 22, 23);
    box-shadow: 1px 1px 5px 4px rgb(19, 22, 23);
    ${PriceContainer} {
        animation: ${slide} 0.5s forwards !important;
    }

}`

export const ImageContainer = styled.div `
    border-radius: 30px;
    overflow: hidden;
    width: 100%;
    height: 100%;
    position: relative;
    img {
    width: 100%;
    height: 100%;
}
`


export const Title = styled.span `
    position: absolute;
    width: 100%;
    bottom: 0;
    padding: 10px;
    background-color:rgba(47, 53, 48,0.4);
    z-index: 10;
    display: inherit;
    font-weight: bold;
`

export const IconContainer = styled.span `
     width: 100px;
     background-color: rgba(95, 125, 147, 0.3);
     padding: 3px;
     border-radius: 5px;

`

export const Price = styled.span `
    background-color: rgba(95, 125, 147, 0.3);
    width: 50px;
    padding: 3px;
    border-radius: 5px;

`
export const CartIconContainer = styled.div `
    position: relative;
    cursor: pointer;
    span {
        position: absolute;
        top:40%;
        left: 0.8rem;
        color: white;
        font-size: var(--size-2);
    }
}`

export const ItemContainer = styled.div `
     display: flex;
     align-items: center;
     color: white;
     padding: 0.5rem;
     width: 100%;
`

export const ItemImageContainer = styled.span `
    margin-right: 1.3rem;
     img {
         width: 7rem;
         height: 7rem;
     }
`

export const ItemCountContainer = styled.span `
     display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.2rem;
`
