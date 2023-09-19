import styled from 'styled-components';
import { ReactComponent as LikeStyled } from 'images/CarsList/like.svg';

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  grid-row-gap: 50px;
  grid-column-gap: 28px;

  margin-bottom: 100px;
`;

export const Item = styled.li`
  /* width: 274px; */
  position: relative;
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5px;
`;

export const LikeBtn = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;

  background-color: transparent;
  border: none;

  &:focus,
  &:hover {
    background-color: transparent;
  }
  &.liked {
    color: rgba(52, 112, 255, 1);
  }
  &.non-liked {
    color: transparent;
  }
`;

export const Like = styled(LikeStyled)`
  fill: currentColor;
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
  }
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

export const LearnMoreBtn = styled.button`
  width: 100%;
  padding: 12px;
  text-align: center;
  margin-top: 28px;
`;
