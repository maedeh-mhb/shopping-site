import styled from 'styled-components';

export const DirectoryContainer = styled.div `
        display:flex;
       flex-direction:column;
       margin-top:3rem;
        `
export const ItemsImageContainer= styled.span`
width:90%;
  img {
        width:100%
  }
`
export const DirectoryItemContainer = styled.div `
  margin:5rem 2rem;
  display:grid;
  gap:3rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`