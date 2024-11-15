// TitleText.js
import React from 'react';
import styled from 'styled-components';
import { Typography } from '@mui/material';

// Styled Component Wrapper for Typography
const StyledTitleText = styled(Typography)`
  font-style: ${({ fontStyle }) => fontStyle || 'normal'};
  font-weight: ${({ fontWeight }) => fontWeight || 'normal'};
  color: ${({ color }) => color || '#000'};
  font-size: ${({ fontSize }) => fontSize || '1rem'};
  line-height: ${({ lineHeight }) => lineHeight || 'normal'};
  width: ${({ width }) => width || 'auto'};
  height: ${({ height }) => height || 'auto'};
  margin: ${({ margin }) => margin || '0'};
  padding: ${({ padding }) => padding || '0'};
`;

// TitleText Component
const TypeText = ({
  text,
  fontStyle,
  fontWeight,
  color,
  fontSize,
  lineHeight,
  width,
  height,
  margin,
  padding,
  ...props
}) => {
  return (
    <StyledTitleText
      fontStyle={fontStyle}
      fontWeight={fontWeight}
      color={color}
      fontSize={fontSize}
      lineHeight={lineHeight}
      width={width}
      height={height}
      margin={margin}
      padding={padding}
      {...props} // allows passing additional MUI Typography props
    >
      {text}
    </StyledTitleText>
  );
};



// Default Props
// TypeText.defaultProps = {
//   fontStyle: 'normal',
//   fontWeight: 'normal',
//   color: '#000',
//   fontSize: '1rem',
//   lineHeight: 'normal',
//   width: 'auto',
//   height: 'auto',
//   margin: '0',
//   padding: '0',
// };

export default TypeText;
