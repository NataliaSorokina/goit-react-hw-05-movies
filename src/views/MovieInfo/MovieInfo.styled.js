import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Card = styled.div`
  display: flex;
`;

export const MovieCard = styled.div`
  margin-left: 30px;
`;

export const MovieImg = styled.img`
  display: block;
  width: auto;
  margin: 10px 25px;
`;

export const MinorTitle = styled.h2`
  margin-bottom: 35px;
  text-align: start;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 26px;
  color: #3f51b5;
`;

export const ThirdTitle = styled.h3`
  margin: 25px 0px 10px;
  text-align: start;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 18px;
  color: dodgerblue;
`;

export const FourthTitle = styled.h4`
  margin: 25px 0px 5px;
  text-align: start;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 17px;
  color: dodgerblue;
`;

export const FifthTitle = styled.h4`
  margin-top: 90px;
  text-align: start;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 17px;
  color: #3f51b5;
`;

export const Desc = styled.p`
  margin: 5px 0px;
  text-align: start;
  font-weight: 400;
  font-size: 17px;
`;

export const Span = styled.span`
  font-weight: 600;
`;

export const MovieLink = styled(Link)`
  text-decoration: none;
  color: dodgerblue;
`;

export const List = styled.ul`
  display: flex;
  list-style: none;
  padding-left: 0;
`;

export const ListItem = styled.li`
  text-transform: uppercase;
  text-align: start;
  font-weight: 600;
  font-size: 17px;

  &:not(:last-child) {
    margin-right: 100px;
  }
`;
