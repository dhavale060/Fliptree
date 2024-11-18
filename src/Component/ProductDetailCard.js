import React from 'react';
import { Box, Card, Typography } from '@mui/material';
import FlipcartButton from '../Atoms/FlipcartButton';
import styled from 'styled-components';

const ProductDetailCardContainer = styled(Card)({
    display: 'flex',
    flexDirection: 'row',
    gap: '16px',
    padding: '16px',
    alignItems: 'center',
  });
  
  const ImageContainer = styled(Box)({
    width: '350px', // Adjust based on your design
    height: '350px', // Keep a square ratio or adjust as needed
    overflow: 'hidden', // Ensures the image doesn't spill out
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  });
  
  const ProductImage = styled('img')({
    width: '100%', // Ensures the image fits the container
    height: '100%', // Ensures the image fits the container
    objectFit: 'contain', // Adjusts how the image is resized
  });
  
  const ProductDetails = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    flex: 1,
    width: '650px',
    height: '350px'
  });
  

const ProductDetailCard = ({ image, title, description, price, onAddToCart }) => {
  return (
    <ProductDetailCardContainer>
      <ImageContainer>
        <ProductImage src={image} alt={title} />
      </ImageContainer>
      <ProductDetails>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body1">${price}</Typography>
        <Typography variant="body2">{description}</Typography>
        <FlipcartButton
          variant="contained"
          color="blue"
          width="147px"
          height="44px"
          borderradius="10px"
          fontsize="19px"
          onClick={onAddToCart}
        >
          Add to Cart
        </FlipcartButton>
      </ProductDetails>
    </ProductDetailCardContainer>
  );
};

export default ProductDetailCard;
