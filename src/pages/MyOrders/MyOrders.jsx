import React, { useEffect, useState } from 'react';
import './MyOrders.css';
import { getMyOrders } from '../../services/orderService'; // You need to create this service
import { toast } from 'react-toastify';

const MyOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await getMyOrders();
        setOrders(res.orders);
      } catch (err) {
        toast.error(err.response?.data?.message || 'Failed to load orders');
      }
    };
    fetchOrders();
  }, []);

  return (
    <div className="orders-container">
      <h2>My Orders</h2>

      {orders.length === 0 ? (
        <p className="empty-message">You have no orders yet.</p>
      ) : (
        orders.map((order) => (
          <div className="order-card" key={order.order_id}>
            <div className="order-header">
              <span>Order ID: {order.order_id}</span>
              <span>Status: <strong>{order.status}</strong></span>
              <span>Total: ₹{order.total_amount}</span>
              <span>Date: {new Date(order.createdAt).toLocaleDateString()}</span>
            </div>
            {/* <div className="order-items">
              {order.OrderItems.map((item) => (
                <div className="order-item" key={item.orderItem_id}>
                  <img src={getImageURL(item.Product.image)} alt={item.Product.name} />
                  <div>
                    <p>{item.Product.name}</p>
                    <p>Qty: {item.quantity}</p>
                    <p>₹{item.price} each</p>
                  </div>
                </div>
              ))}
            </div> */}
          </div>
        ))
      )}
    </div>
  );
};

export default MyOrders;
