import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { CartProvider } from './contexts/Cart.context';
import { CategoryProvider } from './contexts/Category.context';
import { UserProvider } from './contexts/user.context';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CategoryProvider>
   <UserProvider>
    <CartProvider>
    <BrowserRouter>
       <App />
    </BrowserRouter>
    </CartProvider>
   </UserProvider>  
    </CategoryProvider>
  </React.StrictMode>
);
