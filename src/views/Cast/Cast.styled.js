import styled from '@emotion/styled';

export const List = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 16px;
  margin-top: 30px;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

export const ListImg = styled.img`
  width: 100%;
  height: 330px;
  object-fit: scale-down;
`;

export const Title = styled.h4`
  margin: 10px 10px 0;
  text-align: center;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 17px;
  color: #3f51b5;
`;

export const Desc = styled.p`
  margin: 10px;
  text-align: center;
  font-weight: 400;
  font-size: 17px;
`;

export const Span = styled.span`
  font-weight: 600;
`;
