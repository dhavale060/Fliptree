import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
 width: auto;
 border: 1px solid grey;
 border-radius: 23px;
 height: 53px;
 background-color: ${(props) => (props.color ? `${props.color}` : '#ada7a7')};
 color: white;
 font-weight: bold;
 font-size: 15px;
`

export default function FlipcartButton({onClick,children,color}) {

  return (
   <Button color={color} onClick={onClick}>{children}</Button>
  )
}