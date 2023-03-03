import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../Card';
import { Border, CategoryPreviewContainer, Preview, Title } from './CategoryPreview.styles.jsx';


function CategoryPreview({title,products}) {
   const navigate= useNavigate();

    return(
         <CategoryPreviewContainer>
            <h2>
               <Border></Border> 
               <Title onClick={()=>navigate(`/shop/${title}`)}>{title.toUpperCase()}</Title> 
               <Border></Border> 
            </h2>
            <Preview>

            {
                products.slice(1,5).map((product)=> <Card product={product} key={product.id}/>)
            }
            </Preview>
           
         </CategoryPreviewContainer>
    );
}

export default CategoryPreview;