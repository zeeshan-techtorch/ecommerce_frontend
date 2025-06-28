import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.css';
import { getProductById } from '../../services/productService';
import getImagePath from '../../utils/getImageURL';

const ProductDetail = () => {
  const { product_id } = useParams();
  const [product, setProduct] = useState(null);
    
  // Simulate fetching product by product_id
  useEffect(() => {
   const getProductBy_Id = async ()=>{
    try {
      const response = await getProductById(product_id);
      setProduct(response)
    } catch (error) {
      console.log(error);
    }
   }

   getProductBy_Id()


  }, [product_id]);

  const handleAddToCart = () => {
    // Replace this with actual cart logic (Redux or Context)
    alert(`Added "${product.name}" to cart!`);
  };

  if (!product) return <div>Loading...</div>;

  return (
    <div className="detail-container">
      <div className="image-section">
        <img src={getImagePath(product.image)} alt={product.name} />
      </div>

      <div className="info-section">
        <h2>{product.name}</h2>
        <p className="detail-price">₹{product.price}</p>
        <p className="detail-desc">{product.description}</p>
        <button className="add-cart-btn" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
