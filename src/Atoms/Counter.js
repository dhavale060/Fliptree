import React, { useEffect, useState} from 'react';
import AddBoxIcon from '@mui/icons-material/AddBox';
import RemoveIcon from '@mui/icons-material/Remove';
import {Button} from '@mui/material';

const Counter = ({price}) => {
  const [count, setCount] = React.useState(1);
  const [productTotalAmount, setProductTotalAmount] = useState(price);

  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(count - 1);
  

  useEffect(()=>{
    const handlePrice = () => {
        const totalPrice = price * count;
        console.log(totalPrice);
        setProductTotalAmount(totalPrice);
      }
    handlePrice()
  },[count,price,setProductTotalAmount])

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
      <Button onClick={handleDecrement} color="primary" aria-label="decrease">
        <RemoveIcon/>
      </Button>
      <div>{`Quantity : ${count}`}</div>
      <Button onClick={handleIncrement} color="primary" aria-label="increase">
        <AddBoxIcon/>
      </Button>
      <div>{`Amount : $${productTotalAmount}`}</div>
    </div>
  );
};

export default Counter;
