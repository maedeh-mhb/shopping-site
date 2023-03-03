import {ButtonContainer} from './Button.styles'

function Button(props) {
    const {label,onClick,type,className,disable} = props;
    return (
        <ButtonContainer>
            <button onClick={onClick} type={type} disabled={disable}>{label}</button>
        </ButtonContainer>
    );
}

export default Button;