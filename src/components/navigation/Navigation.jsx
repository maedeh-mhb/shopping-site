import { Route, Routes } from 'react-router-dom';
import Authentication from '../pages/authentication/Authentication';
import ContactPage from '../pages/contact/ContactPage';
import HomePage from '../pages/home/HomePage';
import Shop from '../pages/shop/Shop';
import NavigationBar from './NavigationBar';

function Navigation(props) {
    return (
        <Routes>
            <Route path='/' element={<NavigationBar/>} >
                <Route index element={<HomePage/>} />
                <Route path='/shop' element={<Shop/>}/>
                <Route path='/contact' element={<ContactPage/>}/>
                <Route path='/signIn' element={<Authentication/>}/>
            </Route>
        </Routes>
    );
}

export default Navigation;