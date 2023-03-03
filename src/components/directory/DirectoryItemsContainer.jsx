import React from 'react';
import Card from '../card/Card';
import { DirectoryItemContainer, ItemsImageContainer } from './Directory.styles';


function DirectoryItemsContainer({items}) {
    
    return (
        <div>
        <ItemsImageContainer><img src={items[0].titleImg}/></ItemsImageContainer>
        <DirectoryItemContainer>
         {items.slice(1,4).map((item)=><Card product={item} key={item.id}/>) }
        </DirectoryItemContainer>
        </div>
    );
}


export default DirectoryItemsContainer;