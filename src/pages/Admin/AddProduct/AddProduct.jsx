// src/pages/admin/AddProduct.js
import React, { useState } from 'react';
import './AddProduct.css';

const AddProduct = () => {
  const [form, setForm] = useState({
    name: '',
    description: '',
    price: '',
    stock: '',
    image: '',
    category_id: '',
  });


  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
  
  };

  return (
    
      <div className="form-container">
        <h2 className="form-title">Add New Product</h2>
        <form className="product-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Product Name</label>
            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="e.g. iPhone 14"
            />
          </div>

          <div className="form-group">
            <label>Description</label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Enter product description"
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Price</label>
              <input
                type="number"
                name="price"
                required
                value={form.price}
                onChange={handleChange}
                placeholder="e.g. 999"
              />
            </div>

            <div className="form-group">
              <label>Stock</label>
              <input
                type="number"
                name="stock"
                required
                value={form.stock}
                onChange={handleChange}
                placeholder="e.g. 20"
              />
            </div>
          </div>

          <div className="form-group">
            <label>Image URL</label>
            <input
              type="text"
              name="image"
              value={form.image}
              onChange={handleChange}
              placeholder="https://..."
            />
          </div>

          <div className="form-group">
            <label>Category ID</label>
            <input
              type="text"
              name="category_id"
              required
              value={form.category_id}
              onChange={handleChange}
              placeholder="e.g. a71b-1234-... (UUID)"
            />
          </div>

          <button type="submit" className="submit-btn">Add Product</button>
        </form>
      </div>
    
  );
};

export default AddProduct;
