import styled from "@emotion/styled"
import { colors } from "styles/colors"

export const SelectorContainer = styled.div`
  position: relative;
  display: inline-block;
`

export const LanguageButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 16px;
  padding: 5px;
  color: ${colors.primaryBlack};

  @media (max-width: 768px) {
    font-size: 18px;
    color: white;
  }
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

  @media (max-width: 768px) {
    color: white;
  }
`
