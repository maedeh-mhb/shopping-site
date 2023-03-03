import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Category from '../../../pages/category/Category';
import CategoriesPreview from './CategoriesPreview';

function ShopComponent(props) {

    return (

         <Routes>
             <Route index element={<CategoriesPreview/>}/>
             <Route path=':category' element={<Category />}/>
         </Routes>
    );
}

export default ShopComponent;