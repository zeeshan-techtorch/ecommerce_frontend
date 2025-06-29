import './Cart.css';
import { useCartSelector }  from "../../redux/useSelectors"

const Cart = () => {
  const { cart } = useCartSelector();


  const totalPrice = cart.reduce((total, item) => total + item.Product.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <h2>Your Shopping Cart</h2>

      {cart.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((item) => (
              <div key={item.cartItem_id} className="cart-item">
                <img src={item.Product.image} alt={item.Product.name} />
                <div className="item-info">
                  <h4>{item.Product.name}</h4>
                  <p>Price: ₹{item.Product.price}</p>
                  <p>Quantity: {item.quantity}</p>
                  <button className="remove-btn">Remove</button>
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
