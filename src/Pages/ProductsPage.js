import React, { useEffect, useState } from 'react';
import GridContainer from '../Atoms/GridContainer';
import CardComponent from '../Component/CardComponent';
import styled from 'styled-components';
import { fetchProducts } from '../common/StateManagement/AsyncThunks';
import { useDispatch,useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const ProductContainer = styled.div`
 display: flex;
 flex-direction: column;
 width: 1076px;
`

const ProductsPage = () => {
  const {items,status,error} = useSelector((state) => state.ProductDetails)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Fetch products from the FakeStore API
  useEffect(() => {
    dispatch(fetchProducts())
  },[dispatch]);

  //Function for to view the product
  const viewProductsDetails = (id) => {
    navigate(`/products/${id}`); // Navigate to product details page
  };

  return (
    <ProductContainer>
      <h1>Products</h1>
      {
        status === 'loading' && <p>Loading....</p>
      }
      {
        status === 'error' && <p>{error}</p>
      }
      {
        status === 'success' && (
      <GridContainer>
        {items.map((product) => (
          <CardComponent
            id={product.id}
            key={product.id}
            image={product.image}
            title={product.title}
            description={product.description}
            price={product.price}
            onClick={viewProductsDetails}
          />
        ))}
      </GridContainer>
)}
    </ProductContainer>
  );
};

export default ProductsPage;
