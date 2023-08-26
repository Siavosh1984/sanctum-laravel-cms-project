import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';

function DeleteProduct() {
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    deleteProduct();
  }, []);

  const deleteProduct = async () => {
    try {
      await axios.delete(`/api/products/${id}`);
      history.push('/products');
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    <div>
      <p>Deleting product...</p>
    </div>
  );
}

export default DeleteProduct;
