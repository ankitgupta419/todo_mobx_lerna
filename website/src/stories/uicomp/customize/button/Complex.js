import styled from "styled-components";
import { Button } from "../../../../packages/styled-button-component";

export const Complex = styled(Button)`
  background-color: ${props =>
    props.primary ? "rgb(219,112,147)" : "rgb(255,239,213)"};
  border-color: ${props =>
    props.primary ? "rgba(219,112,147,0.9)" : "rgba(255,239,213,0.9)"};
  &:hover,
  &:focus {
    background-color: ${props =>
      props.primary ? "rgba(219,112,147,0.8)" : "rgba(255,239,213,0.6)"};
    border-color: ${props =>
      props.primary ? "rgba(219,112,147,0.9)" : "rgba(255,239,213,0.9)"};
  }
  border-radius: 0;
`;
