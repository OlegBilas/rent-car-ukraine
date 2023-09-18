import { Field as FieldStyled } from 'formik';
import styled from 'styled-components';
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
