
import SignInForm from './SignInForm';
import SignUpPage from './SignUpForm';
import classes from './Authentication.module.scss';
import { useContext } from 'react';
import { userContext } from '../../../contexts/user.context';

function Authentication(props) {
       const {currentuser} = useContext(userContext);
    console.log(currentuser)
    return (
        <div className={classes.authContainer}>
            {
                currentuser ? <SignInForm/> : <SignUpPage />
            }
        </div>
    );
}

export default Authentication;