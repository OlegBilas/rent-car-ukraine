import styled from 'styled-components';
import { Form as FormStyled } from 'formik';
import { Field as FieldStyled } from 'formik';

export const Form = styled(FormStyled)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 18px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50px;
`;

export const Field = styled(FieldStyled)`
  padding: 14px 18px;
  border-radius: 14px;
  background: #f7f7fb;
  color: #121417;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.11111;

  & > option {
    color: rgba(18, 20, 23, 0.2);
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 1.25;
  }
`;

export const SearchBtn = styled.button`
  padding: 14px 44px;
  border-radius: 12px;
  background-color: #3470ff;

  color: #fff;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.42857;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: #0b44cd;
  }
`;
