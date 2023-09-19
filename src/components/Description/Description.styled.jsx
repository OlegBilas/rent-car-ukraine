import styled from 'styled-components';

export const Title = styled.h1`
  margin-bottom: 48px;
  font-weight: 600;
  font-size: 104px;
  font-style: italic;
  text-align: center;
  line-height: 1;
  color: #3e85f3;

  border-radius: 44px;
  padding: 18px 18px;

  background-color: rgb(247, 247, 251);
`;

export const ListItem = styled.li`
  width: 80%;
  margin-right: auto;
  transform: translateX(-150%);
  transition: transform 2500ms ease;

  &:nth-child(2) {
    margin-left: auto;
    transform: translateX(150%);
    transition: transform 2500ms cubic-bezier(0.4, 0, 0.2, 1) 2500ms;
  }
  &:nth-child(3) {
    transition: transform 2500ms cubic-bezier(0.4, 0, 0.2, 1) 5000ms;
  }

  &.loaded {
    transform: translateX(0%);
  }
`;

export const TitleWrapper = styled.h2`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
`;
export const StyledNumber = styled.span`
  font-weight: 600;
  font-size: 104px;

  color: #3e85f3;
`;
export const StyledLabel = styled.span`
  font-weight: 600;
  font-size: 40px;
  line-height: 1.1;
  text-transform: uppercase;
  border-radius: 44px;
  padding: 6px 18px;

  background-color: rgb(247, 247, 251);
  color: #3e85f3;
`;

export const Info = styled.p`
  font-weight: 500;
  font-size: 24px;
  line-height: 1.3;
  color: #ffffff;

  margin-bottom: 48px;
`;
