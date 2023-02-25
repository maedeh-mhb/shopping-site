import { createContext, useState } from "react";
import producData from '../ProductData.json'

export const productContext= createContext({
    products:[]
});

export const ProductProvider=({children}) =>{
    const [products,setProducts] = useState(producData);
    const value= {products};
  
    return <productContext.Provider value={value}>{children}</productContext.Provider>
}