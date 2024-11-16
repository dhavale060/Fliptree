import React from 'react';
import { Box } from '@mui/material';

const GridContainer = ({ children }) => {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: 2,
        padding: 2,
      }}
    >
      {children}
    </Box>
  );
};

export default GridContainer;