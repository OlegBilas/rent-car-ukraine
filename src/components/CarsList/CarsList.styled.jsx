import { Line as LineStyled } from 'components/Line/Line';
import styled from 'styled-components';

export const List = styled.ul`
  /* max-width: calc(100% - 20px); */
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(274px, 426px);
  grid-row-gap: 29px;
  grid-column-gap: 50px;
`;

export const Item = styled.li`
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5px;
`;

export const Image = styled.img`
  margin-bottom: 14px;
  border-radius: 14px;
  background: linear-gradient(
      180deg,
      rgba(18, 20, 23, 0.5) 2.5%,
      rgba(18, 20, 23, 0) 41.07%
    ),
    #f3f3f2;
  object-fit: cover;
  object-position: 50% 50%;
  overflow: hidden;
`;

export const FirstLine = styled(LineStyled)`
  margin-bottom: 4px;
`;

export const SecondLine = styled(LineStyled)`
  margin-bottom: 28px;
`;
export const LearnMoreBtn = styled.button`
  width: 100%;
  padding: 12px;
  text-align: center;
`;
