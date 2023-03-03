import React, { useContext } from 'react';
import { categoryContext } from '../../../contexts/Category.context';
import CategoryPreview from './CategoryPreview';

function CategoriesPreview(props) {

  const {categoriesMap} =useContext(categoryContext);
    return (
         <>
             {
                 Object.keys(categoriesMap).map((title)=>{
                    const products= categoriesMap[title];
                    return <CategoryPreview key={title} title={title} products={products}/>
                 }
                 
                 )
             }
            
         </>

    );
}

export default CategoriesPreview;