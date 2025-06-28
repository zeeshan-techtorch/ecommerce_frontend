import React, { useState } from 'react';
import './Cart.css';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: '1',
      name: 'Wireless Headphones',
      price: 1999,
      quantity: 1,
      image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTgc-_tM7Sth9XVN7ll0ST1YMj5FAqQgzW8cuQRi_jHsDq98i_R3leYjKqXabxlgjGe11HzxcQWiol1lBJGzgzJHlum2SR-9Ry7k6hv65V78U4eS4ge0QN90iyYYPVPGovUDlSUPdajO1k&usqp=CAc',
    },
    {
      id: '2',
      name: 'Smart Watch',
      price: 2999,
      quantity: 1,
      image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSqZdE7RW3KHSB02rEjbJ_OiD9AypusiXM_9Ho7QjfEyYDOK_jMpYGR8047RnqOZFwGDazzyWmoVwPJdRJR9i1sMS9WgCR4O8_aiMQIeIjw",
    },
  ]);

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  return (
    <div className="cart-container">
      <h2>Your Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="item-info">
                  <h4>{item.name}</h4>
                  <p>Price: ₹{item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                  <button className="remove-btn" onClick={() => removeItem(item.id)}>Remove</button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h3>Total: ₹{totalPrice}</h3>
            <button className="checkout-btn">Proceed to Checkout</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
