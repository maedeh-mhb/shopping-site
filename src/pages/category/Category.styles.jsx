import styled from 'styled-components';



export const CategoryContainer = styled.div `
    width:100%;
    display:flex;
    flex-direction:column;
    align-items: flex-start;
    padding:3rem;
    color:white;
    h1 {
        margin-bottom:3rem
    }
`;

export const CategoriesContainer = styled.div `
    width:100%;
    gap:2rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
`