import {InputContainer} from './input.styles.jsx'

function Input(props) {
    const {type,onChange,value,defaultValue,name,id,error} = props;

    return (
        <InputContainer>
        <input 
        type={type} 
        onChange={onChange} 
        value={value}
        defaultValue={defaultValue}
        name={name}
        id={id}
        />
            {error && <span>{error}</span>}
        </InputContainer>
    );
}

export default Input;