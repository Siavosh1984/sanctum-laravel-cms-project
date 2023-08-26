import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';

function ProductForm() {
  const { id } = useParams();
  const history = useHistory();
  const [formData, setFormData] = useState({
    name: '',
    slug: '',
    description: '',
    price: '',
  });

  useEffect(() => {
    if (id) {
      fetchProduct();
    }
  }, []);

  const fetchProduct = async () => {
    try {
      const response = await axios.get(`/api/products/${id}`);
      setFormData(response.data);
    } catch (error) {
      console.error('Error fetching product:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        await axios.put(`/api/products/${id}`, formData);
      } else {
        await axios.post('/api/products', formData);
      }
      history.push('/products');
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <h1>{id ? 'Edit Product' : 'Add Product'}</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="slug"
          placeholder="Slug"
          value={formData.slug}
          onChange={handleChange}
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default ProductForm;
