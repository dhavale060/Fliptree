import React from 'react';
import styled from 'styled-components';
import TypeText from '../Atoms/TypeText';

const LogoCircle = styled.div`
    height: 30px;
    width: 30px;
    background-color: blue;
    border-radius: 15px;
    margin:5px;
`

function Logo() {
  return (
    <div style={{display:"flex" , justifyContent:"space-between", flexDirection:"row",alignItems:"center"}}>
       <LogoCircle/>
       <TypeText margin="5px" text="Anywhere app" fontWeight="bold" fontSize="20px"/>
    </div>
  )
}

export default Logo
