import styled from 'styled-components';
import { ReactComponent as github } from 'images/Footer/github.svg';

export const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 32px;
  padding-bottom: 32px;
  margin-left: auto;
  margin-right: auto;
  background-color: #3470ff;
`;

export const GithubLink = styled.a`
  display: flex;
  align-items: center;
  font-size: 16px;
  color: #fff;
`;

export const GithubIcon = styled(github)`
  fill: currentColor;
  stroke: currentColor;
  margin-right: 8px;
`;
