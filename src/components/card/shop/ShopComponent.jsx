import React, { useContext } from 'react';
import { productContext } from '../../../contexts/Product.context';
import Card from '../Card';
import classes from './ShopComponent.module.scss';

function ShopComponent(props) {
    const {products}=  useContext(productContext);

    return (
        <div className={classes.container}>
            {
                products.map((product)=><Card product={product} key={product.id}/>)
            }
        </div>
    );
}

export default ShopComponent;