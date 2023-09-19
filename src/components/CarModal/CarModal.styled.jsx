import styled from 'styled-components';
import { CarTitle as CarTitleStyled } from 'components/CarTitle/CarTitle';
import { Line } from 'components/Line/Line';
import { ReactComponent as CloseStyled } from 'images/CarModal/x.svg';

export const Container = styled.div`
  position: relative;
  width: 541px;

  padding: 40px;
  border-radius: 24px;
  background: #fff;
`;

export const Img = styled.img`
  margin-bottom: 14px;
  border-radius: 14px;

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
  stroke: #121417;

  &:focus,
  &:hover {
    stroke: rgba(52, 112, 255, 1);
  }
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

export const Description = styled.p`
  margin-top: 14px;
  margin-bottom: 24px;

  color: #121417;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.42857;
`;

export const Title = styled.h3`
  color: #121417;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.42857;
`;

export const ListRequirements = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;

  & > li {
    padding: 7px 14px;
    border-radius: 35px;
    background-color: #f9f9f9;

    color: #363535;
    font-size: 12px;
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: -0.24px;

    & > span {
      color: #3470ff;
    }
  }
`;

export const PhoneUs = styled.a`
  padding: 12px 50px;
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
