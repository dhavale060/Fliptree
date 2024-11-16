// SignUp.js
import React from 'react';
import styled from 'styled-components';
import TypeText from '../Atoms/TypeText';
import { Typography, Link } from '@mui/material';
import FormikForm from '../Molecules/FormikForm';
import { NavLink } from '../common/NavLink';

const Wrapper = styled.div`
 height: 530px;
 width: 1203px;
 display:flex;
 flex-direction:row;
 align-items:center;
`;

const SignupContainer = styled.div`
    height: 450px;
    width: 660px;
    margin-left: 58px;
`
const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 125px;
`

const SignUp = () => {
  return (
    <Wrapper>
      <SignupContainer>
        <TextWrapper>
        <TypeText text="START FOR FREE" fontWeight="bold" fontSize="15px" color="#8d8888"/>
        <TypeText text="Create new account" fontWeight="bold" fontSize="30px"/>
        <Typography sx={{color:"#8d8888", fontWeight:"bold",fontSize:"15px"}} variant="body2" mb={3}>
          Already A Member? <NavLink to="/login">Log in</NavLink>
        </Typography>
        </TextWrapper>
        <FormikForm/>
      </SignupContainer>
    </Wrapper>
  );
};

export default SignUp;
