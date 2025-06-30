// components/Sidebar.js
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => (
  <div className="sidebar">
    <ul>
      <li><Link to="/admin/dashboard">Dashboard</Link></li>
      <li><Link to="/admin/add-product">Add Product</Link></li>
    </ul>
  </div>
);

export default Sidebar;
