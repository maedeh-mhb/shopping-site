import  { useState,useEffect } from 'react';

 function useFormValidate(props) {
    const [error,setError] = useState({});
    const {formData,isSubmit,onChangeField}=props;
    
    useEffect(()=>{
        if(isSubmit) {
            for(let data of formData ){
                const {fieldValue,fieldType,fieldName} =data;
                if (fieldType === 'text') {
                        if(!fieldValue || fieldValue.trim() === '') {
                            error[fieldName] = `please insert ${fieldName}`;
                        }
                        else error[fieldName] = null
                        
                    }
                    else if (fieldType === 'email') {
                        if(!fieldValue || fieldValue.trim() === '' ){
                            error[fieldName] = `please insert ${fieldName}`; 
                        }
                        else if(!String(fieldValue)
                        .toLowerCase()
                        .match(
                          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                        )) {
                            error[fieldName] = `please insert a valid ${fieldName}`;
                        }
                        else error[fieldName] = null
                    } 
                        
                    else if (fieldType === 'password'){

                         if(!fieldValue || fieldValue.trim() === '' ){
                            error[fieldName] = `please insert ${fieldName}`;
                            
                         }
                         else if (!fieldValue.match(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/)){
                            error[fieldName] = `please insert a valid ${fieldName}`;
                             
                         }
                         else error[fieldName] = null
                     }  
                         
                    else if (fieldType === 'confirm') {
                        let password = formData.find((item)=>item.fieldName === 'password').fieldValue;
                         if(!fieldValue || fieldValue.trim() === '' ){
                             error[fieldName] = `please insert confirm password`;   
                         }
                         else if(password !== fieldValue) {
                            error[fieldName] = `confirm password doesn't match`;

                         }
                         else error[fieldName] = null
                     }
                     setError({...error})
                }
        }
    },[isSubmit,onChangeField])
    return [error,setError]
}

export default useFormValidate;