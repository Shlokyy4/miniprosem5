// src/components/AddProduct.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { handleSuccess, handleError } from '../utils'; // Assuming you have success/error handling in utils
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/AddProduct.css';

const AddProduct = () => {
  const [productData, setProductData] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    image: null // Change to null to hold the file object
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setProductData({ ...productData, image: files[0] }); // Store the file object
    } else {
      setProductData({ ...productData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(); // Create a FormData object

    // Append product data to the FormData object
    for (const key in productData) {
      formData.append(key, productData[key]);
    }

    try {
      const token = localStorage.getItem('token'); // Assumes JWT token is stored in localStorage
      await axios.post('/api/products/add', formData, {
        headers: {
          Authorization: token,
          'Content-Type': 'multipart/form-data' // Important for file uploads
        }
      });
      handleSuccess('Product added successfully!');
      // Reset form after successful submission (optional)
      setProductData({
        name: '',
        description: '',
        price: '',
        category: '',
        image: null
      });
    } catch (error) {
      handleError('Failed to add product');
      console.error('Error:', error);
    }
  };

  return (
    <div className="add-product-container">
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Product Name</label>
          <input type="text" name="name" value={productData.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Description</label>
          <textarea name="description" value={productData.description} onChange={handleChange} required />
        </div>
        <div>
          <label>Price</label>
          <input type="number" name="price" value={productData.price} onChange={handleChange} required />
        </div>
        <div>
          <label>Category</label>
          <input type="text" name="category" value={productData.category} onChange={handleChange} required />
        </div>
        <div>
          <label>Upload Image</label>
          <input type="file" name="image" accept="image/*" onChange={handleChange} required />
        </div>
        <button type="submit">Add Product</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default AddProduct;
