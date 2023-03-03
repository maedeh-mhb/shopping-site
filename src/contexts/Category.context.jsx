import { createContext, useEffect, useState } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";

export const categoryContext= createContext({
    categoriesMap:[]
});

export const CategoryProvider=({children}) =>{
    const [categoriesMap,setCategoriesMap] = useState({});

    useEffect(()=>{
    const getCategoriesMap = async () => {
    const categoryMap = await getCategoriesAndDocuments();
    setCategoriesMap(categoryMap);
  };
     getCategoriesMap();
  },[]);
    const value= {categoriesMap};
  
    return <categoryContext.Provider value={value}>{children}</categoryContext.Provider>
}