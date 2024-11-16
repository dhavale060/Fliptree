import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';


const ProductDetailCard = ({ image, title, description, price, onAddToCart }) => {
  return (
    <Card sx={{ maxWidth: 600, margin: 'auto', mt: 4 }}>
      <CardMedia component="img" height="300" image={image} alt={title} />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          {title}
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          {description}
        </Typography>
        <Typography variant="h5" color="primary">
          ${price}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={onAddToCart}
          sx={{ mt: 2 }}
        >
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductDetailCard;
