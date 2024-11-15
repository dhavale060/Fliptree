// RegisterForm.js
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Container,TextField } from '@mui/material';
import styled from 'styled-components';
import { validationSchema } from '../common/ValidationSchema';
import { formFields } from '../common/FormFields';
import { useDispatch} from 'react-redux';
import { addUserData } from '../common/StateManagement/UserDetailsSlice';

const StyledContainer = styled(Container)`
    padding: 0px !important;
    height: 245px;
    border-radius: 3px;
    margin-top: 10px;
`;

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto auto auto;
    gap: 15px;
    width: 100%;
    max-width: 660px;
    padding: 0px;
    border-radius: 0px;

  /* Use nth-child to control full-width rows */
  & > div:nth-child(3),
  & > div:nth-child(4) {
    grid-column: 1 / -1; /* Span full width for 3rd and 4th items */
  }
`;

const StyledError = styled.div`
  color: red;
  font-size: 0.875rem;
  margin-top: 4px;
`;

const ButtonContainer = styled.div`
display:grid;
grid-template-columns: repeat(2, 1fr);
gap:25px;
grid-template-rows: auto;
margin-top:15px;
`
const FlipcartButton = styled.button`
 width: auto;
 border: 1px solid grey;
 border-radius: 23px;
 height: 53px;
 background-color: ${(props) => (props.primary ? '#3087dd' : '#ada7a7')};
 color: white;
 font-weight: bold;
 font-size: 15px;
`
const FormikInput = ({ label, ...props }) => (

  <Field name={props.name}>
    {({ field, meta }) => (
      <div>
        <TextField
          {...field}
          label={label}
          variant="outlined"
          type={props.type}
          fullWidth
          error={meta.touched && Boolean(meta.error)}
        />
        <ErrorMessage component={StyledError} name={props.name} />
      </div>
    )}
  </Field>
);

const FormikForm = () => {
  
  const dispatch = useDispatch();
  
  const initialValues = formFields.reduce((acc, field) => {
    acc[field.id] = '';
    return acc;
  }, {});

  const handleSubmit = (values) => {
    console.log('Form Data:', values);
    dispatch(addUserData(values));
  };

  return (
    <StyledContainer>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <GridContainer>
            {formFields.map((field) => (
                <FormikInput
                  key={field.id}
                  name={field.id}
                  label={field.label}
                  type={field.type}
                />
            ))}
          </GridContainer>
          <ButtonContainer>
            <FlipcartButton>Change Method</FlipcartButton>
            <FlipcartButton primary>Submit</FlipcartButton>
          </ButtonContainer>
        </Form>
      </Formik>
    </StyledContainer>
  );
};

export default FormikForm;
