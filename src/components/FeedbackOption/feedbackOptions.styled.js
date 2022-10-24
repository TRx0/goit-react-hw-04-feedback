import styled from '@emotion/styled';

export const Box = styled.li`
list-style: none;
display: inline;
margin-right: 10px;
&:last-child {
  margin-right: 0;
}
`;

export const Button = styled.button`
  border: none;
  border-radius: 10px;
  background-color: whitesmoke;
  padding: 20px;
  cursor: pointer;
  font-size: 24px;
  &:active {
    background-color: #A3E479;
    scale: 1.1;
  }
`;