import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavigLink = styled(NavLink)`
  display: inline-flex;
  padding: 12px;
  font-weight: 600;
  font-size: 24px;
  text-decoration: none;
  color: honeydew;
  &:not(:last-child) {
    margin-right: 250px;
  }
  &.active {
    color: gainsboro;
  }
`;
