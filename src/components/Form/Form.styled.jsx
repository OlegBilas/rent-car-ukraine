import styled from 'styled-components';
import { Form as FormStyled } from 'formik';
import { Field } from 'formik';
import { MyNumberInput } from 'components/MyNumberInput/MyNumberInput';

export const Form = styled(FormStyled)`
  display: flex;
  justify-content: center;
  align-items: flex-start;
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
`;

export const FieldStyled = styled(Field)`
  height: 48px;
  padding: 14px 18px;
  margin-top: 8px;
  box-sizing: border-box;
  border-radius: 14px;
  border: none;
  background: #f7f7fb;
  color: #121417;
  font-family: Manrope;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.11111;
  outline: none;
`;

export const FieldMake = styled(FieldStyled)`
  width: 224px;
  &::placeholder {
    color: #121417;
  }
`;

export const List = styled.ul`
  position: absolute;
  top: 52px;
  z-index: 1;

  width: 100%;
  height: 272px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 8px;

  padding: 14px 18px;
  color: rgba(18, 20, 23, 0.2);
  background-color: #fff;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25;

  border-radius: 14px;
  border: 1px solid rgba(18, 20, 23, 0.05);
  background: #fff;
  box-shadow: 0px 4px 36px 0px rgba(0, 0, 0, 0.02);

  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(18, 20, 23, 0.05);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background-color: #fff;
  }

  & > li:hover,
  & > li:focus {
    color: #121417;
  }
`;

export const MyNumberInputStyled = styled(MyNumberInput)`
  margin-top: 8px;
  height: 48px;
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

export const FieldPrice = styled(MyNumberInputStyled)`
  width: 125px;
  border-radius: 14px;
  &::placeholder {
    color: #121417;
  }
`;

export const OpenDiv = styled.div`
  position: absolute;
  width: 34px;
  height: 20px;
  padding: 0px 14 px;
  z-index: 20;

  top: 22px;
  right: 0px;
  background-color: #f7f7fb;
  border: none;

  pointer-events: none;

  &:focus,
  &:hover {
    background-color: #f7f7fb;
    border: none;
  }
`;

export const DivWrapper = styled.div`
  display: flex;
`;

export const Div = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
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
  top: 22px;
  left: 24px;

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
  top: 22px;
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

export const FieldTo = styled(MyNumberInputStyled)`
  position: relative;
  width: 160px;
  border-top-right-radius: 14px;
  border-bottom-right-radius: 14px;
  padding-left: 48px;
`;

export const SearchBtn = styled.button`
  align-self: flex-end;
  padding: 14px 44px;
  border-radius: 12px;
  background-color: #3470ff;

  color: #fff;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.42857;
`;
