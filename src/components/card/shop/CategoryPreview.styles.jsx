import styled from 'styled-components';

export const CategoryPreviewContainer= styled.div `
      margin-top: 7rem;
      h2 {
         display: flex;
         justify-content: space-evenly;
         align-items: center;
      };
      @media screen and  (max-width: 768px) {
         h2{
             font-size: var(--size-3)
         };
     
      }
` 

export const Preview= styled.div `
      margin: 50px auto;
      width: 90%;
      gap:2rem;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
` 
export const Title= styled.div `
      color: white;
      cursor: pointer;
` 
export const Border= styled.span `
         height: 0.1rem;
         background-color: white;
         width: 40%;
` 

