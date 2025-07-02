import React, { useState } from 'react';
import './Checkout.css';
import { useNavigate } from 'react-router-dom';
import {useCartSelector} from "../../redux/useSelectors"

const Checkout = () => {
  const navigate = useNavigate();
  const { cart } = useCartSelector();

  const [form, setForm] = useState({
    address: '',
    city: '',
    postalCode: '',
    country: '',
    paymentMethod: 'COD',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = async (e) => {
    e.preventDefault();

  };

  return (
    <div className="checkout-container">
      <form onSubmit={handlePlaceOrder} className="checkout-form">
        <h2>Checkout</h2>

        <div className="form-group">
          <label>Address</label>
          <input
            name="address"
            value={form.address}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>City</label>
          <input
            name="city"
            value={form.city}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Postal Code</label>
          <input
            name="postalCode"
            value={form.postalCode}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Country</label>
          <input
            name="country"
            value={form.country}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Payment Method</label>
          <select
            name="paymentMethod"
            value={form.paymentMethod}
            onChange={handleChange}
          >
            <option value="COD">Cash on Delivery</option>
            <option value="Online">Online Payment</option>
          </select>
        </div>

        <h3>Order Summary</h3>
        <ul className="summary">
          {cart.map((item) => (
            <li key={item.product_id}>
              {item.Product?.name || item.name} × {item.quantity} = ₹
              {item.price * item.quantity}
            </li>
          ))}
        </ul>

        <button type="submit" className="place-order-btn">
          Place Order
        </button>
      </form>
    </div>
  );
};

export default Checkout;
