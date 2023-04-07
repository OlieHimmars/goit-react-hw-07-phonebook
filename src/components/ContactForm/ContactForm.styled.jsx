import styled from 'styled-components';
import { Form } from 'formik';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

export const Title = styled.span`
  font-weight: 700;
  padding: 10px;
`;

export const Input = styled.input`
  border: 0;
  outline: 0;
  width: 350px;
  margin-bottom: 10px;
  padding: 5px;
`;

export const AddButton = styled.button`
  width: 160px;
height: 40px;
  border-radius: 20px;
  background-color: green;
  margin: 0 auto;
  padding: 10px 20px;
`;

export const MainForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  border-radius: 5px;
  background-color: grey;
  border: 1px solid black;
`;