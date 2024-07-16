import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from '../../pages/MainPage/MainPage'
import Cart from '../../pages/Cart/Cart'
import Catalog from '../../pages/Catalog/Catalog'
import Product from '../../pages/Product/Product'
import Registration from '../../pages/Registration/Registration'

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/catalog" element={<Catalog />} />
                <Route path="/product/:id" element={<Product />} />
                <Route path="/registration" element={<Registration />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;