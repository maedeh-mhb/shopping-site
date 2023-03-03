import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../../components/card/Card';
import { categoryContext } from '../../contexts/Category.context';
import {CategoryContainer,CategoriesContainer} from './Category.styles.jsx';

function Category(props) {
    const {category} = useParams();
    const {categoriesMap} = useContext(categoryContext);
    const [products,setProducts] = useState([]);

    useEffect(()=>{
        setProducts(categoriesMap[category])
    },[categoriesMap,category]);

    return (
        <CategoryContainer>
            <h1>{category?.toUpperCase()}</h1>
            <CategoriesContainer>
                {products && products.map((product)=><Card product={product}/>)}
            </CategoriesContainer>
        </CategoryContainer>
    );
}

export default Category;