import { createUserDocFromAuth, onAuthChange } from "../utils/firebase/firebase.utils";

import { createContext, useState, useEffect } from 'react'

export const userContext= createContext({
    currentuser: null,
    setCurrentUser:() => null
});


export const UserProvider=({children})=>{
    const [currentuser,setCurrentUser] = useState(null);
    const value={currentuser,setCurrentUser};

    useEffect(()=>{
            const unsubscribe= onAuthChange((user)=>{
                if(user) {
                    createUserDocFromAuth(user)
                };
   
                setCurrentUser(user);
                return unsubscribe;
            })
    },[]);

    return <userContext.Provider value={value}>{children}</userContext.Provider>
}