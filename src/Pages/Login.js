// pages/Login.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Box, TextField } from '@mui/material';
import FlipcartButton from '../Atoms/FlipcartButton';
import styled from 'styled-components';
import TypeText from '../Atoms/TypeText';
import {login} from '../common/StateManagement/UserDetailsSlice';

const LoginContainer = styled(Box)`
 display: flex;
 flex-direction: column;
 width: 1160px;
 height: 450px;
 max-height: 600px;
`
const FormContainer = styled.div`
 width: 400px;
 height: 350px;
 max-height:400px;
 padding: 20px;
 display: flex;
 flex-direction: column;
 margin-left: 20px;
 margin-top: 30px;
 row-gap: 30px;
`

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {userData} = useSelector((state) => state.UserDetails);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    // Debugging Redux State and Inputs
    console.log('Redux State (userDetails):', userData);
    console.log('Email:', email);
    console.log('Password:', password);

    const userFound = userData.find(
      (user) => user.email === email && user.password === password
    );

    // Debugging Find Logic
    console.log('User Found:', userFound);

    if (userFound) {
      alert(`Login successful! Welcome ${userFound.email}`);
      dispatch(login());
      navigate("/products")
    } else {
      alert('Incorrect email or password!');
      navigate("/")
    }
  };


  return (
    <LoginContainer component="form" >
     <FormContainer component="form-container">
      <TypeText text="You can login here..." fontWeight="bold" fontSize="30px"/>
      <TextField
        required
        label="Email"
        name="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        variant="outlined"
        fullWidth
      />
      <TextField
        required
        label="Password"
        name="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        variant="outlined"
        fullWidth
      />
      <FlipcartButton onClick={handleLogin}>Login</FlipcartButton>
     </FormContainer>
    </LoginContainer>
  );
};

export default Login;
