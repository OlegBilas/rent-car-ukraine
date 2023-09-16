import styled from 'styled-components';

export const LineList = styled.ul`
  display: inline-flex;
  justify-content: start;

  & > li {
    padding-left: 6px;
    padding-right: 6px;
    border-right: 1px solid rgba(18, 20, 23, 0.1);
  }
  & > li:first-child {
    padding-right: 6px;
    border-right: 1px solid rgba(18, 20, 23, 0.1);
  }
  & > li:last-child {
    padding-left: 6px;
  }
`;
