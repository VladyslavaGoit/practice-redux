import styled from 'styled-components';
const getBcgColor = ({ completed }) => {
  if (completed) {
    return '#1976d2';
  } else {
    return '#e2e5e8';
  }
};
export const StyledButton = styled.button`
  display: inline-flex;
  padding: 8px 12px;
  border-radius: 4px;
  border: none;
  font: inherit;
  cursor: pointer;
  background-color: ${getBcgColor};
  color: inherit;
  &:hover {
    background-color: #1976d2;
    color: #fff;
  }
`;
