import React from 'react';
import styled from 'styled-components';
import Logo from '../Molecules/Logo';
import TypeText from '../Atoms/TypeText';
import { NavLink } from '../common/NavLink';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../common/StateManagement/UserDetailsSlice';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FlipcartButton from '../Atoms/FlipcartButton';

const  HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1204px;
    height: 76px;
`
const LinkContainer = styled.div`
    width: 500px;
    height: 71px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    justify-items: center;
`
const LinkCartContainer = styled.div`
    width: 130px;
    height: 70px;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

function Header() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(logout());
        navigate("/login");
    }
  return (
    <HeaderContainer>
      <LinkContainer>
       <Logo/>
       <NavLink to="/"><TypeText text="Home" fontWeight="bold" fontSize="15px" color="#8d8888"/></NavLink>
       <NavLink to="/products"><TypeText text="Product" fontWeight="bold" fontSize="15px" color="#8d8888"/></NavLink>
      </LinkContainer>
      <LinkCartContainer>
      <NavLink to="/cart"><ShoppingCartIcon sx={{color:"#8d8888"}}/></NavLink>
       <FlipcartButton onClick={handleLogout} borderradius="7px" width="70px" height="30px">Logout</FlipcartButton>
      </LinkCartContainer>
    </HeaderContainer>
  )
}

export default Header
