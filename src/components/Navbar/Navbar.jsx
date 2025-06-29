import React,{useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import './Navbar.css';
import useDispatcher from '../../redux/useDispatcher';
import { useCartSelector } from '../../redux/useSelectors';
const Navbar = () => {
  const { logout }= useDispatcher();
  const {cart } = useCartSelector();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const cartItemCount = cart.length;


  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    setIsLoggedIn(!!storedUser);
  });

  const handleLogout = () => {
    logout()
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">🛍️ ShopEase</Link>
      </div>

      <ul className="nav-links">
        {/* <li><Link to="/">Home</Link></li> */}
      </ul>

      <div className="nav-actions">
        <Link to="/cart" className="cart-icon">
          <FaShoppingCart size={20} />
          {cartItemCount > 0 && <span className="cart-badge">{cartItemCount}</span>}
        </Link>

       {
        isLoggedIn ?(
          <button className="logout-btn" onClick={handleLogout}>Logout</button>
        ):
           <Link to="/login" className="login-btn">
          <FaUser style={{ marginRight: '5px' }} />
          Login
        </Link>
        
       }
      </div>
    </nav>
  );
};

export default Navbar;
