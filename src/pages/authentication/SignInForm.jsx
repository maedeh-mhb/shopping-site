import { useCallback, useState } from 'react';
import Button from '../../../src/components/UI/button/Button';
import Input from '../../../src/components/UI/input/Input';
import ShowAlert from '../../../src/components/UI/Modal/ShowAlert';
import useFormValidate from '../../custom/CustomHooks/useFormValidate';
import { signInAuthWithEmailAndPassword, signInWithGooglePopup } from '../../utils/firebase/firebase.utils';
import { ButtonContainer, FormContainer, FormControl, InnerContainer } from './Authentication.styles';

function SignInForm(props) {

    const defaultFields= {
        email:'',
        password:'',
    }
    const [formFields,setFormFields] = useState(defaultFields);
    const {email,password} =formFields;
    const [isSubmit,setIsSubmit] =useState(false);
    const [showAlert,setShowAlert] = useState({});

    const handleChange= useCallback((event)=>{
        const {name,value} = event.target;
        setFormFields({...formFields,[name]:value});
    },[formFields]);

    const [error,setError] = useFormValidate(
    {formData:
    [
    {fieldName:'email',fieldType:'email',fieldValue:formFields.email},
    {fieldName:'password',fieldType:'password',fieldValue:formFields.password},
   
    ],isSubmit:isSubmit,onChangeField:handleChange});


   async function signInwithGoogle() {
        const {user} = await signInWithGooglePopup();
        
    };
    function handleClose() {
        setShowAlert({...showAlert,show:false})
    }

    async function handleSubmit(e) {
        e.preventDefault();
        console.log(error)
            if (!error.email && !error.password) {

                try {
                    const response= await signInAuthWithEmailAndPassword(email,password);
                    console.log(response)
                }
                catch(error) {
                    switch (error.code) {
                        case 'auth/wrong-password' :
                             setShowAlert({show:true,title:'ERROR',content:'Password Is Wrong'});
                        break;
                        case 'auth/user-not-found' :
                            setShowAlert({show:true,title:'ERROR',content:'Email Not Found!'});
                            break;
                        default:
                            console.log(error)
                    }
                }
            }

    }

    return (
        <FormContainer>
        <h2>Already Have An Account?</h2>
        <span>Sign In Now</span>
    <InnerContainer>
    <FormControl>
               <label  htmlFor='email'>Email</label>
              <Input type="email" name='email' onChange={handleChange} value={email} id="email" error={error['email']}/>
            </FormControl>
            <FormControl>
               <label  htmlFor='password'>Password</label>
              <Input type="password" name='password' onChange={handleChange} value={password} id="password" error={error['password']}/>
            </FormControl>
    </InnerContainer>
    <footer>
            <Button  label="Sign In " onClick={(e)=>{
                setIsSubmit(true);
                handleSubmit(e);
            }}/>
            <Button  label="Sign In With Google PopUp" onClick={signInwithGoogle}/>

    </footer>
    {showAlert.show && <ShowAlert title={showAlert.title} content={showAlert.content} onClose={handleClose}/>}
    </FormContainer>
    );
}

export default SignInForm;