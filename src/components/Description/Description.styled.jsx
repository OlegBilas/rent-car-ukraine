import styled from 'styled-components';

export const ListItem = styled.li`
transform: translateX(-100%)
  &:nth-of-child(2) {
    transform: translateX(100%)
  }
`;
export const InfoWrapper = styled.div`
  max-width: 275px;
`;
export const TitleWrapper = styled.h2`
  display: inline-flex;
  flex-direction: column;
  margin-bottom: 24px;
`;
export const StyledNumber = styled.span`
  font-weight: 700;
  font-size: 104px;
  line-height: 1;
  color: #3e85f3;
  margin-bottom: 14px;
`;
export const StyledLabel = styled.span`
  font-weight: 700;
  font-size: 40px;
  line-height: 1.1;
  text-transform: uppercase;
  border-radius: 44px;
  padding: 6px 18px;
  margin-bottom: 8px;

  background-color: #dcebf7;
  color: #3e85f3;
`;
export const StyledText = styled.span`
  font-weight: 700;
  font-size: 40px;
  line-height: 1.1;
  text-transform: uppercase;
  color: #171820;
`;
export const Info = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.3;
  color: #111111;

  margin-bottom: 48px;
`;
