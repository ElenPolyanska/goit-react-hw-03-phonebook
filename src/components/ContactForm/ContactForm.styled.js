import styled from "styled-components";
import { Form as VanilaForm, Field as VanilaField, ErrorMessage as FormikError } from 'formik';

export const Form = styled(VanilaForm)`
 width: 460px;
  margin: 18px auto 18px 8px;
  padding: 14px 14px;
  border: 1px solid #2a2a2a;
  border-radius: 4px;

`;

export const Field = styled(VanilaField)`
display: block;
  margin: 8px 0 0 8px;
  outline: none;  
`;

export const ErrorMessage = styled(FormikError)`
color: red;
font-size: 12px;
margin: 4px 0;
`;

export const Label = styled.label`
 display: block;
  font-size: 18px;
  font-weight: 500;

  :not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const Button = styled.button`
  margin: 8px 0 0 auto;
  padding: 4px 8px;
  border: 1px solid black;
  background-color: transparent;
  font-size: 18px;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
  border 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    background-color:#02cfe6;
    color: white;
     border: 1px solid #04d4b2;
  }
`;