import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addToCart } from '../common/StateManagement/ProductSlice';
import ProductDetailCard from '../Component/ProductDetailCard';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    alert('Product added to cart!');
    navigate('/cart'); // Redirect to the cart page if desired
  };

  if (!product) return <div>Loading...</div>;

  return (
    <ProductDetailCard
      image={product.image}
      title={product.title}
      description={product.description}
      price={product.price}
      onAddToCart={handleAddToCart}
    />
  );
};

export default ProductDetails;
