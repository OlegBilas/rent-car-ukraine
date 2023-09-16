import { CarTitle as CarTitleStyled } from 'components/CarTitle/CarTitle';
import { LineList } from 'components/Line/Line.styled';
import styled from 'styled-components';

export const Container = styled.div`
  width: 541px;
  /* height: 752px; */
  padding: 40px 36px;
  border-radius: 24px;
  background: #fff;
`;

export const Img = styled.img`
  margin-bottom: 14px;
  border-radius: 14px;
  /* background: #f3f3f2; */
  overflow: hidden;
`;

export const CarTitle = styled(CarTitleStyled)`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.333;
`;

export const FirstLineModal = styled(LineList)`
  margin-bottom: 4px;
`;

export const SecondLineModal = styled(LineList)`
  margin-bottom: 14px;
`;
