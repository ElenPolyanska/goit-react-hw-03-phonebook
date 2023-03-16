import styled from 'styled-components';

export const Item = styled.div`
  width: 340px;
  font-size: 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  :not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const Button = styled.button`
  display: inline-block;
  padding: 4px 8px;
  margin: 4px;

  border: 1px solid black;
  background-color: transparent;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    background-color: #fc035e;
    color: white;
    border: 1px solid #fc035e;
  }
`;
