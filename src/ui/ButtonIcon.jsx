import styled from "styled-components";

const ButtonIcon = styled.button`
margin: auto;
  border-radius: var(--border-radius-sm);
  transition: all 0.4s;

  &:hover {
    background-color: var(--color-grey-500);
  }

  & svg {
    width: 40px;
    height: 40px;
    color: var(--color-brand-600);
  }
`;

export default ButtonIcon;
