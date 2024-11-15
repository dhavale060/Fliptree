// InputForm.js
import React from 'react';
import styled from 'styled-components';
import InputField from '../Atoms/InputField';

// Styled Container with CSS Grid
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* First row has two columns */
  grid-template-rows: auto auto auto;    /* Three rows */
  gap: 16px;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 24px;
  background-color: #f5f5f5;
  border-radius: 8px;

  /* Use nth-child to control full-width rows */
  & > div:nth-child(3),
  & > div:nth-child(4) {
    grid-column: 1 / -1; /* Span full width for 3rd and 4th items */
  }
`;

const inputFields = [
  { id: 1, label: 'First Name', type: 'text' },
  { id: 2, label: 'Last Name', type: 'text' },
  { id: 3, label: 'Email', type: 'email' },
  { id: 4, label: 'Password', type: 'password' },
];

const InputForm = () => {
  return (
    <GridContainer>
      {inputFields.map((field) => (
        <div key={field.id}>
          <InputField label={field.label} type={field.type} />
        </div>
      ))}
    </GridContainer>
  );
};

export default InputForm;
