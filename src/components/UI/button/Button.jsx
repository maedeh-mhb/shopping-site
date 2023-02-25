import classes from './Button.module.scss'

function Button(props) {
    const {label,onClick,type,className,disable} = props;
    return (
        <div className={`${classes.button} ${className}`}>
            <button onClick={onClick} type={type} disabled={disable}>{label}</button>
        </div>
    );
}

export default Button;