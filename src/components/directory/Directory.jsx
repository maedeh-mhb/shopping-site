import { useContext, useEffect,useState } from 'react';
import { categoryContext } from '../../contexts/Category.context';
import {DirectoryContainer} from './Directory.styles'
import DirectoryItemsContainer from './DirectoryItemsContainer';
import first from '../../assets/images/first.jpg';
import second from '../../assets/images/second.jpg';
import third from '../../assets/images/third.jpg';
import fourth from '../../assets/images/forth.jpg';
import fifth from '../../assets/images/fifth.jpg';


function Directory({categoriesMap}) {
    
    const [products,setProducts] = useState({});
    const featured = [
            {
                title:'accessories',
                titleImg:first
            },
            {
                title:'crop tops',
                titleImg:third
            },
            {
                title:'hoodies & jackets',
                titleImg:second
            },
            {
                title:'joggers',
                titleImg:fourth
            },
            {
                title:'leggings',
                titleImg:fifth
            }
     ]
    useEffect(()=>{
        if (categoriesMap) {
            Object.keys(categoriesMap).map((title)=>{
               const featuredItem= featured.find((item)=>item.title === title);
               const newProducts =  categoriesMap[title];
               newProducts[0]={titleImg :featuredItem.titleImg}
               const firstFour =newProducts.filter((_,ind)=>ind<4); 
               products[title] =firstFour; 
         });
         setProducts({...products})
        }
    },[categoriesMap]);

    return (
        <DirectoryContainer>
           {
               Object.keys(products).map((title)=><DirectoryItemsContainer items={products[title]} title={title}/>
               )       
           }      
        </DirectoryContainer>
    );
}

export default Directory;