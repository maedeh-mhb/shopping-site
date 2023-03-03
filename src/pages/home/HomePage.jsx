import React, { useContext } from 'react';
import Directory from '../../components/directory/Directory';
import { categoryContext } from '../../contexts/Category.context';

function HomePage(props) {
  const {categoriesMap}= useContext(categoryContext);
    return (
        <div>
          <Directory categoriesMap={categoriesMap}/>
        </div>
    );
}

export default HomePage;