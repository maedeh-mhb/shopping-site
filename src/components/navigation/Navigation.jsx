import { Route, Routes } from 'react-router-dom';
import ShopComponent from '../card/shop/ShopComponent';
import Authentication from '../../pages/authentication/Authentication';
import CheckOut from '../../pages/checkout/CheckOut';
import ContactPage from '../../pages/contact/ContactPage';
import HomePage from '../../pages/home/HomePage';
import NavigationBar from './NavigationBar';

function Navigation(props) {
    return (
        <Routes>
            <Route path='/' element={<NavigationBar/>} >
                <Route index element={<HomePage/>} />
                <Route path='shop/*' element={<ShopComponent/>}/>
                <Route path='contact' element={<ContactPage/>}/>
                <Route path='checkout' element={<CheckOut/>}/>
                <Route path='signIn' element={<Authentication/>}/>
            </Route>
        </Routes>
    );
}

export default Navigation;