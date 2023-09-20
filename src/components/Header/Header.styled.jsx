import styled from 'styled-components';
import { NavLink as NavLinkForStyle } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 24px;
  margin-top: 32px;
  margin-bottom: 32px;
  margin-left: auto;
  margin-right: 128px;
  background-color: #fff;
`;

export const NavLink = styled(NavLinkForStyle)`
  color: #3e85f3;
  font-size: 24px;
  font-weight: 600;
  line-height: 1.5;
  text-decoration-line: none;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &.active {
    color: rgba(11, 68, 205, 1);
    text-decoration-line: underline;
  }

  &:focus,
  &:hover {
    color: rgba(11, 68, 205, 1);
  }
`;
