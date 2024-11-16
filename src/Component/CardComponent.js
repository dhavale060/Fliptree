import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';

const CardComponent = ({ image, title, description, price, onClick , id}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height="140" image={image} alt={title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography variant="h6" color="primary">
          ${price}
        </Typography>
      </CardContent>
      <Button size="small" onClick={() => onClick(id)}>View Details</Button>
    </Card>
  );
};

export default CardComponent;
