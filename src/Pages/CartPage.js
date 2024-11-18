import {React} from 'react';
import { useSelector ,useDispatch} from 'react-redux';
import { Typography, List, ListItem, ListItemText } from '@mui/material';
import Counter from '../Atoms/Counter';
import DeleteIcon from '@mui/icons-material/Delete';
import {Button} from '@mui/material';
import {removeFromCart } from '../common/StateManagement/ProductSlice';
import styled from 'styled-components';
import TypeText from '../Atoms/TypeText';


const CartPageContainer = styled.div`
    width: 1052px;
    height: auto;
`

const ProductDescription = styled.div`
    width: 500px;
    height: auto;
    margin: 6px;
`
const CounterButtonContainer = styled.div`
    width: 500px;
    height: -webkit-fill-available;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const CartPage = () => {
  const {cartItems} = useSelector((state) => state.ProductDetails)
  const dispatch = useDispatch();

  const removeCart = (ID) => {
    const filtedCartItems = cartItems.filter((item) => item.id !== ID)
     dispatch(removeFromCart(filtedCartItems));
  };

  return (
    <CartPageContainer>
      <TypeText margin="5px" text="Cart Items" fontWeight="bold" fontSize="20px"/>
      {cartItems.length === 0 ? (
        <Typography variant="body1">Your cart is empty!</Typography>
      ) : (
        <List>
          {cartItems.map((item, index) => (
            <ListItem key={index}>
              <ProductDescription>
                <ListItemText
                  primary={item.title}
                  secondary={`Price: $${item.price}`}
                />
              </ProductDescription>
              <CounterButtonContainer>
                <Counter price={item.price} cartItems={cartItems}/>
                <Button onClick={() => removeCart(item.id)} color="primary" aria-label="increase">
                   <DeleteIcon/>
                </Button>
              </CounterButtonContainer>
            </ListItem>
          ))}
        </List>
      )}
    </CartPageContainer>
  );
};

export default CartPage;
