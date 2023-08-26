import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';

function EditProduct() {
  const { id } = useParams();
  const history = useHistory();
  const [formData, setFormData] = useState({
    name: '',
    slug: '',
    description: '',
    price: '',
  });

  useEffect(() => {
    fetchProduct();
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
      await axios.put(`/api/products/${id}`, formData);
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
      <h1>Edit Product</h1>
      <form onSubmit={handleSubmit}>
        {/* Input fields for name, slug, description, and price */}
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}

export default EditProduct;
