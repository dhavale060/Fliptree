import {React,useState} from 'react';
import { useSelector ,useDispatch} from 'react-redux';
import { Typography, List, ListItem, ListItemText } from '@mui/material';
import Counter from '../Atoms/Counter';
import DeleteIcon from '@mui/icons-material/Delete';
import {Button} from '@mui/material';
import {removeFromCart } from '../common/StateManagement/ProductSlice';

const CartPage = () => {
  const {cartItems} = useSelector((state) => state.ProductDetails)
  const dispatch = useDispatch();

  const removeCart = (ID) => {
    const filtedCartItems = cartItems.filter((item) => item.id !== ID)
     dispatch(removeFromCart(filtedCartItems));
  };

  return (
    <div>
      <Typography variant="h4" sx={{ mt: 4, mb: 2 }}>
        Your Cart
      </Typography>
      {cartItems.length === 0 ? (
        <Typography variant="body1">Your cart is empty!</Typography>
      ) : (
        <List>
          {cartItems.map((item, index) => (
            <ListItem key={index}>
              <ListItemText
                primary={item.title}
                secondary={`Price: $${item.price}`}
              />
              <Counter price={item.price} cartItems={cartItems}/>
              <Button onClick={() => removeCart(item.id)} color="primary" aria-label="increase">
                 <DeleteIcon/>
              </Button>
            </ListItem>
          ))}
        </List>
      )}
    </div>
  );
};

export default CartPage;
