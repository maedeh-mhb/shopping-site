
import SignInForm from './SignInForm';
import SignUpPage from './SignUpForm';
import classes from './Authentication.module.scss';

function Authentication(props) {
       

    return (
        <div className={classes.authContainer}>
            <SignInForm/>
            <SignUpPage />
        </div>
    );
}

export default Authentication;