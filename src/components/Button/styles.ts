import styled from "@emotion/styled"
import { colors } from "styles/colors"

export const ButtonComponent = styled.button`
  width: fit-content;
  min-height: auto;
  outline: none;
  border: none;
  border-radius: 200px;
  background: linear-gradient(to right, ${colors.primaryBeige}, ${colors.primaryBlack});
  color: white;
  font-size: 20px;
  font-weight: 400;
  padding: 24px 50px;
  letter-spacing: 1px;
  cursor: pointer;
  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    background: ${colors.primaryBeige};
  }
  &:active {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transform: translateY(2px);
  }
`
