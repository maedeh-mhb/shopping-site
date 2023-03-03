import styled from 'styled-components';


export const FormContainer = styled.div `
width: 80%;
height: 400px;
background: var(--bgColor);
-webkit-backdrop-filter: var(--glass-filter);
backdrop-filter: var(--glass-filter);
border: var(--glass-border);
border-radius: 5px;
margin: 50px auto;
color: var(--text-color);
display: flex;
font-size: 0.9rem;
flex-direction: column;
justify-content: center;
padding: 20px;
footer {
    display: flex;
    width: 50%;
    margin: 15px auto;
    justify-content: space-between;
};

`
export const FormControl = styled.div `
display: flex;
justify-content: space-between;
input {
    border-radius: 3px;
    border: none;
    background: var(--bgColor);
    -webkit-backdrop-filter: var(--glass-filter);
    backdrop-filter: var(--glass-filter);
    padding: 3px;
}
`
export const InnerContainer =styled.div `
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 70%;
    margin: 10px auto;
    @media screen and (max-width: 768px){
            width: 100%;
    };
    @media screen and ( min-width: 768px) and (max-width: 1280px){
        width: 90%;
    };
`
export const ButtonContainer= styled.div `
    display: flex;
    width:70% !important;
    gap:3rem;
    justify-content: space-between;
`

export const AuthContainer = styled.div `
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
    height: 100vh;
`
