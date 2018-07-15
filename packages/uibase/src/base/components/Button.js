import styled from "styled-components";

export const Button = styled.button`
  border-radius: 0;
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  overflow: visible;
  text-transform: none;
  &:focus {
    outline: 1px dotted;
  }
  color: #fff;
  background-color: #28a745;
  background-image: linear-gradient(-180deg, #34d058 0%, #28a745 90%);
`;
