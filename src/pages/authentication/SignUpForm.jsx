import Input from '../../../src/components/UI/input/Input';
import { useState,useCallback  } from 'react';
import useFormValidate from '../../custom/CustomHooks/useFormValidate';
import Button from '../../../src/components/UI/button/Button';
import { ButtonContainer, FormContainer, FormControl, InnerContainer } from './Authentication.styles';
import { createAuthWithEmailAndPassword, createUserDocFromAuth } from '../../utils/firebase/firebase.utils';
import ShowAlert from '../../../src/components/UI/Modal/ShowAlert';


function SignUpPage(props) {

    
    const defaultFields= {
        name:'',
        email:'',
        password:'',
        confirmPassword:''
    }
    const [formFields,setFormFields] = useState(defaultFields);
    const {name,email,password,confirmPassword} =formFields;
    const [isSubmit,setIsSubmit] =useState(false);
    const [showAlert,setShowAlert] = useState({});

    const handleChange= useCallback((event)=>{
        const {name,value} = event.target;
        setFormFields({...formFields,[name]:value});
    },[formFields]);

    const [error,setError] = useFormValidate(
    {formData:
    [{fieldName:'name',fieldType:'text',fieldValue:formFields.name},
    {fieldName:'email',fieldType:'email',fieldValue:formFields.email},
    {fieldName:'password',fieldType:'password',fieldValue:formFields.password},
    {fieldName:'confirmPassword',fieldType:'confirm',fieldValue:formFields.confirmPassword},
    ],isSubmit:isSubmit,onChangeField:handleChange});



    function onCancel(e) {
       
        setFormFields(defaultFields)
        setIsSubmit(false);
        setError({});

}

   async function submitHandler(e) {
        e.preventDefault();
        console.log(error)
        if(!error.name && !error.email && !error.password && !error.confirmPassword && isSubmit) {
             try {
              const {user}= await createAuthWithEmailAndPassword(email,password);
              const response= await createUserDocFromAuth(user,{name});
              onCancel();
             }
             catch(error){
                 if(error.code === 'auth/email-already-in-use') {
                     setShowAlert({show:true,title:'ERROR',content:'Email Is Already In Used'});
                 }
         }
        
        }
    };
    function handleClose() {
        setShowAlert({...showAlert,show:false})
    }

    return (
        <>
        <FormContainer>
            <h2>Don't Have An Account?</h2>
            <span>Sign Up Now !</span>
            <form >
                <InnerContainer>
                <FormControl>
                   <label htmlFor='name'>User Name</label>
                  <Input type="text" name='name' onChange={handleChange} value={name} id="name" error={error['name']}/>
                </FormControl>
                <FormControl>
                   <label  htmlFor='email'>Email</label>
                  <Input type="email" name='email' onChange={handleChange} value={email} id="email" error={error['email']}/>
                </FormControl>
                <FormControl>
                   <label  htmlFor='password'>Password</label>
                  <Input type="password" name='password' onChange={handleChange} value={password} id="password" error={error['password']}/>
                </FormControl>
                <FormControl>
                   <label  htmlFor='confirmPassword'>Confirm Password</label>
                  <Input type="password" name='confirmPassword' onChange={handleChange} value={confirmPassword} id="confirmPassword" error={error['confirmPassword']}/>
                </FormControl>
                </InnerContainer>
                <footer>
                    <Button onClick={onCancel} label="Cancel"/> 
                    <Button onClick={(e)=>{
                         setIsSubmit(true);
                         submitHandler(e);
                    }} label="Sign Up"/> 
                </footer>
            </form>
        </FormContainer>
        {showAlert.show && <ShowAlert title={showAlert.title} content={showAlert.content} onClose={handleClose}/>}
        </>
    );
}

export default SignUpPage;