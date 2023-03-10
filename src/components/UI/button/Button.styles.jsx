import styled from 'styled-components';

export const ButtonContainer = styled.div `
:hover {
    color: var(--text-color);
}
button{
    color: var(--main-color);
    background: var(--bgColor);
    -webkit-backdrop-filter: var(--glass-filter);
    backdrop-filter: var(--glass-filter);
    border: none;
    border-radius: 3px;
    padding: 10px;
    cursor: pointer;
    &:disabled {
        color: rgb(104, 102, 102);
        cursor: default;

    }
}
`
