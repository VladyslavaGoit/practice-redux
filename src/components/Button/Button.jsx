import { StyledButton } from './Button.styled';

export const Button = ({ type = 'button', selected = false, children }) => {
  return (
    <StyledButton selected={selected} type={type}>
      {children}
    </StyledButton>
  );
};
