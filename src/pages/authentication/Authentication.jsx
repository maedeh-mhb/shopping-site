
import { AuthContainer } from './Authentication.styles';
import SignInForm from './SignInForm';
import SignUpPage from './SignUpForm';

function Authentication(props) {
  
    return (
        <AuthContainer>
            <SignInForm/>
            <SignUpPage />
            
        </AuthContainer>
    );
}

export default Authentication;