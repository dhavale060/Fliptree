import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
 width: ${(props) => props.width ? props.width : "auto"};
 border: 1px solid grey;
 border-radius: ${(props) => props.borderradius ? props.borderradius : "23px"};
 height: ${(props) => props.height ? props.height : "53px"};
 background-color: ${(props) => (props.color ? `${props.color}` : '#ada7a7')};
 color: white;
 font-weight: bold;
 font-size: ${(props) => (props.fontsize ? `${props.fontsize}` : '15px')};
 transition: all 0.3s ease; /* Smooth transition */

  &:hover {
    background-color: blue;
  }

  &:active {
    transform: scale(0.95); /* Slightly shrink the button on click */
  }
`

export default function FlipcartButton({onClick,children,color,borderradius,width,height,fontsize}) {

  return (
   <Button fontsize={fontsize} color={color} width={width} height={height} onClick={onClick} borderradius={borderradius}>{children}</Button>
  )
}