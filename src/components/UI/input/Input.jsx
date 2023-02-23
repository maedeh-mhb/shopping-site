import classes from './input.module.scss'

function Input(props) {
    const {type,onChange,value,defaultValue,name,id,error} = props;

    return (
        <div className={classes['input-container']}>
        <input 
        type={type} 
        onChange={onChange} 
        value={value}
        defaultValue={defaultValue}
        name={name}
        id={id}
        />
            {error && <span>{error}</span>}
        </div>
    );
}

export default Input;