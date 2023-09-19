import styled from 'styled-components';
import { Form as FormStyled } from 'formik';
import { Field } from 'formik';
import { MyNumberInput } from 'components/MyNumberInput/MyNumberInput';

export const Form = styled(FormStyled)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  gap: 18px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50px;
`;

export const Label = styled.label`
  color: #8a8a89;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.28571;
  margin-bottom: 8px;
`;

export const FieldStyled = styled(Field)`
  display: block;
  padding: 14px 18px;
  border-radius: 14px;
  border: none;
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

export const FieldMake = styled(FieldStyled)`
  width: 224px;
`;

export const FieldPrice = styled(FieldStyled)`
  width: 125px;
`;

export const MyNumberInputStyled = styled(MyNumberInput)`
  padding: 14px 18px;

  width: 160px;
  background: #f7f7fb;
  border: none;
  color: #121417;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.11111;
  outline: none;
  box-sizing: border-box;
`;

export const Div = styled.div`
  position: relative;
`;

export const FieldFrom = styled(MyNumberInputStyled)`
  width: 160px;
  border-top-left-radius: 14px;
  border-bottom-left-radius: 14px;
  border-right: 1px solid rgba(138, 138, 137, 0.2);
  padding-left: 70px;
`;

export const TextFrom = styled.span`
  position: absolute;
  top: 14px;
  left: 24px;
  z-index: 1;

  background: #f7f7fb;
  border: none;
  color: #121417;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.11111;
`;

export const TextTo = styled.span`
  position: absolute;
  top: 14px;
  left: 184px;
  z-index: 1;

  background: #f7f7fb;
  border: none;
  color: #121417;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.11111;
`;

export const FieldTo = styled(MyNumberInputStyled)`
  position: relative;
  width: 160px;
  border-top-right-radius: 14px;
  border-bottom-right-radius: 14px;
  padding-left: 48px;
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
