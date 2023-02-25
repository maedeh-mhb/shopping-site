import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'; 
import { Provider } from 'react-redux';                                                
import { Store } from './store/Store';
import { UserProvider } from './contexts/user.context';
import { ProductProvider } from './contexts/Product.context';
import { CartProvider } from './contexts/Cart.context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProductProvider>
   <UserProvider>
    <CartProvider>
    <BrowserRouter>
       <App />
    </BrowserRouter>
    </CartProvider>
   </UserProvider>  
    </ProductProvider>
  </React.StrictMode>
);
