import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Box, TextField } from '@mui/material';
import FlipcartButton from '../Atoms/FlipcartButton';
import styled from 'styled-components';
import TypeText from '../Atoms/TypeText';
import {login} from '../common/StateManagement/UserDetailsSlice';
import { registerFields } from '../common/FormFields';

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
//hooks declaration
  const dispatch = useDispatch();
  const navigate = useNavigate();

//redux state 
  const {userData} = useSelector((state) => state.UserDetails);
  const [formValues,setFormValues] = useState({}); 
  console.log("formValues",formValues);
//selected some fields from formFields to login
  const loginFields = registerFields.toSpliced(0 , 2);
  
//declared function for handleChange
  const handleChange = (e) => {
    const {name , value} = e.target;
    setFormValues({...formValues , [name]:value});
  }

//declared function for handle login 
  const handleLogin = () => {
    const userFound = userData.find(
      (user) => user.email === formValues.Email && user.password === formValues.Password
    );

    if (userFound) {
      alert(`Login successful! Welcome ${userFound.email}`);
      dispatch(login());
      navigate("/products")
    } else {
      alert('Incorrect email or password!');
      navigate("/")
    }
  };

// dynamicaly rendered textfield with map stored in variable to add into the page
  const InputField = loginFields.map((field) => (
    <>
       <TextField
        required
        key={field.id}
        label={field.label}
        name={field.label}
        type={field.type}
        value={formValues[field.name]}
        onChange={handleChange}
        variant="outlined"
        fullWidth
      />
    </>
    ))

  return (
    <LoginContainer component="form" >
     <FormContainer component="form-container">
      <TypeText text="You can login here..." fontWeight="bold" fontSize="30px"/>
      <>{InputField}</>
      <FlipcartButton onClick={handleLogin}>Login</FlipcartButton>
     </FormContainer>
    </LoginContainer>
  );
};

export default Login;
