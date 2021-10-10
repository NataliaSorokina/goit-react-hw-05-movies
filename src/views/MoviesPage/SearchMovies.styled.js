import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const SearchBtn = styled.button`
  width: auto;
  height: 50px;
  font-weight: normal;
  font-size: 20px;
  margin: 0px;
  padding: 10px 20px;
  color: #fff;
  background: #3f51b5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  border: none;
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: #303f9f;
  }
`;

export const Input = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  border: 3px solid #3f51b5;
  color: #555;
  font-size: 20px;
  margin: 20px 10px;
  padding: 10px;
  outline: 0;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
`;
