import React from 'react';
import styled from 'styled-components';
import Logo from '../Molecules/Logo';
import TypeText from '../Atoms/TypeText';
import { Link } from '@mui/material';

const  HeaderContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 1204px;
    height: 76px;
`
const LinkContainer = styled.div`
    width: 440px;
    height: 71px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    justify-items: center;
`

function Header() {
  return (
    <HeaderContainer>
      <LinkContainer>
       <Logo/>
       <TypeText text="Home" fontWeight="bold" fontSize="15px" color="#8d8888"/>
       <TypeText text="About" fontWeight="bold" fontSize="15px" color="#8d8888"/>
      </LinkContainer>
    </HeaderContainer>
  )
}

export default Header
