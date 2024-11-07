import styled from "@emotion/styled"
import { colors } from "styles/colors"

export const SelectorContainer = styled.div`
  position: relative;
  display: inline-block;

  @media(max-width: 768px) {
    display: none;
  }
`

export const LanguageButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 16px;
  padding: 5px;
  color: ${colors.primaryBlack};
`

export const Dropdown = styled.div`
  position: absolute;
  border: 1px solid #ccc;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`

export const LanguageOption = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  width: 100%;
  color: ${colors.primaryBlack};
  padding: 3px;

  &:hover {
    color: ${colors.primaryBeige};
  }
`
