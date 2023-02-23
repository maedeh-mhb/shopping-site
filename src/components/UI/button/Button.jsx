import classes from './Button.module.scss'

function Button(props) {
    const {label,onClick,type} = props;
    return (
        <div className={classes.button}>
            <button onClick={onClick} type={type}>{label}</button>
        </div>
    );
}

export default Button;