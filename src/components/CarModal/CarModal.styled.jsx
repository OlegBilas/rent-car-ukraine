import styled from 'styled-components';
import { CarTitle as CarTitleStyled } from 'components/CarTitle/CarTitle';
import { Line } from 'components/Line/Line';
import { ReactComponent as CloseStyled } from 'images/CarModal/x.svg';

export const Container = styled.div`
  position: relative;
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

export const CloseBtn = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;

  background-color: transparent;
  border: none;

  &:focus,
  &:hover {
    background-color: transparent;
  }
`;

export const Close = styled(CloseStyled)`
  /* fill: currentColor;
  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &.liked {
    stroke: currentColor;
  }
  &.non-liked {
    stroke: rgba(255, 255, 255, 0.8);
  }
  &:focus,
  &:hover {
    fill: rgba(52, 112, 255, 1);
    stroke: currentColor;
  } */
`;

export const CarTitle = styled(CarTitleStyled)`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.333;
`;

export const FirstLineModal = styled(Line)`
  margin-bottom: 4px;
`;

export const SecondLineModal = styled(Line)`
  margin-bottom: 14px;
`;
