import Input from '../../UI/input/Input';
import { useState,useCallback  } from 'react';
import useFormValidate from '../../../custom/CustomHooks/useFormValidate';
import Button from '../../UI/button/Button';
import classes from  './Authentication.module.scss';
import { createAuthWithEmailAndPassword, createUserDocFromAuth } from '../../../utils/firebase/firebase.utils';
import ShowAlert from '../../UI/Modal/ShowAlert';


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
        e.preventDefault();
        setFormFields(defaultFields)
        setIsSubmit(false);
        setError({});

}

   async function submitHandler(e) {
        e.preventDefault();
            try {
             const {user}= await createAuthWithEmailAndPassword(email,password);
             const response= await createUserDocFromAuth(user,{name});
             console.log(response)
            }
            catch(error){
                if(error.code === 'auth/email-already-in-use') {
                    setShowAlert({show:true,title:'ERROR',content:'Email Is Already In Used'});
                }
        }
        onCancel();
    };
    function handleClose() {
        setShowAlert({...showAlert,show:false})
    }

    return (
        <>
        <div className={classes.formContainer}>
            <h2>Don't Have An Account?</h2>
            <span>Sign Up Now !</span>
            <form onSubmit={submitHandler}>
                <div className={classes.innerContainer}>
                <div className={classes.formControl}>
                   <label htmlFor='name'>User Name</label>
                  <Input type="text" name='name' onChange={handleChange} value={name} id="name" error={error['name']}/>
                </div>
                <div className={classes.formControl}>
                   <label  htmlFor='email'>Email</label>
                  <Input type="email" name='email' onChange={handleChange} value={email} id="email" error={error['email']}/>
                </div>
                <div className={classes.formControl}>
                   <label  htmlFor='password'>Password</label>
                  <Input type="password" name='password' onChange={handleChange} value={password} id="password" error={error['password']}/>
                </div>
                <div className={classes.formControl}>
                   <label  htmlFor='confirmPassword'>Confirm Password</label>
                  <Input type="password" name='confirmPassword' onChange={handleChange} value={confirmPassword} id="confirmPassword" error={error['confirmPassword']}/>
                </div>
                </div>
                <footer>
                    <Button onClick={onCancel} label="Cancel"/> 
                    <Button onClick={(e)=>{
                         setIsSubmit(true);
                         submitHandler(e);
                    }} label="Sign Up"/> 
                </footer>
            </form>
        </div>
        {showAlert.show && <ShowAlert title={showAlert.title} content={showAlert.content} onClose={handleClose}/>}
        </>
    );
}

export default SignUpPage;