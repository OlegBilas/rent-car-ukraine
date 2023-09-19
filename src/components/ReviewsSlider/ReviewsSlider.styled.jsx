import styled from 'styled-components';

export const Container = styled.div`
  width: 60%;
  margin-left: auto;
  margin-right: auto;
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 40px;
  line-height: 1.1;
  color: #3e85f3;
  text-align: center;
  text-transform: uppercase;

  margin-bottom: 50px;
`;

export const SliderCard = styled.div`
  height: 284px;
  margin-bottom: 18px;
  padding: 32px;

  border-radius: 8px;
  border: 1px solid #e7e5e5;
`;

export const ReviewContainer = styled.div`
  position: sticky;
  top: 0px;
  height: 100%;
  border-radius: 14px;
  overflow: hidden;

  background-color: #ffffff;
`;

export const AvatarWrapper = styled.div`
  width: 100%;
  height: 100%;

  overflow: hidden;
`;

export const AvatarImg = styled.img`
  object-fit: cover;
  object-position: 50% 50%;
  background-repeat: no-repeat;
`;
export const UserInfo = styled.div`
  margin-left: 8px;
`;

export const Name = styled.h3`
  margin-top: 12px;
  margin-bottom: 12px;

  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 1;
  color: #343434;
  text-align: center;
`;
