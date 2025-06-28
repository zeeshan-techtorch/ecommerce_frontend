import { Routes, Route } from 'react-router-dom';
import Cart from "../pages/Cart/Cart"
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import ProductDetail from '../pages/ProductDetail/ProductDetail';
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cart" element={< Cart/>} />
      <Route path="/register" element={< Register/>} />
      <Route path="/products/:product_id" element={<ProductDetail />} />
    </Routes>
  );
};

export default AppRoutes;
