import { createContext, useEffect, useState } from "react";

export const CartContext= createContext({
    isOpen:false,
    setOpen:()=> {},
    cardItems:[],
    addItems: ()=> {},
    removeItem: () =>{},
    total: 0 
});


export const CartProvider =({children}) =>{
    const[isOpen,setOpen] = useState(false);
    const [cardItems,setCardItems] = useState([]);
    const [total,setTotal] = useState(0);
    const [totalPrice,setTotalPrice] = useState(0);

    useEffect(()=>{
        const newTotal = cardItems.reduce((sum, curr) => {
            return curr.quantity + sum;
          }, 0);
            setTotal(newTotal);
        const newTotalPrice = cardItems.reduce((sum,curr)=>{
            return curr.quantity * curr.price + sum;
        },0);
        setTotalPrice(newTotalPrice)

    },[cardItems]);

    const addItems= (product) =>{
       const {id,name} = product;
       const itemIndx= cardItems.findIndex((item)=>item.id === id);
       if(itemIndx !== -1) {
           cardItems[itemIndx].quantity ++;
           setCardItems([...cardItems]);
       }
       else {
        setCardItems([...cardItems,{...product,quantity:1}]);
       }
    };

    const removeItem =(id)=>{
       const removedItem= cardItems.find((item)=>item.id ==  id);
       const removedIndx= cardItems.findIndex((item)=>item.id ==  id);
       if(removedItem.quantity > 1) {
             removedItem.quantity -- ;
             
       }
       else {
        cardItems.splice(removedIndx,1)
       }
       setCardItems([...cardItems])
    }
    const value = {isOpen,setOpen,addItems,total,cardItems,removeItem,totalPrice};

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}