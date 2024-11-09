import styled from "@emotion/styled"
import { colors } from "styles/colors"

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  @media (max-width: 768px) {
    width: 90%;
  }
`

export const InputLabel = styled.p`
  font-size: 20px;
  font-weight: 800;
  margin-left: 4px;
`

export const InputComponent = styled.input<{ error?: boolean }>`
  width: 100%;
  padding: 8px 0px;
  outline: none;
  font-size: 24px;
  border: 2px solid ${props => (props.error ? "red" : "transparent")};
  background-color: transparent;
  border-bottom: 2px solid ${colors.primaryBlack};

  &:hover {
    border-bottom: 2px solid ${colors.secondaryBlack};
  }

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 14px 0px;
  }
`

export const IconContainer = styled.img`
  display: flex;
  flex-direction: row-reverse;
  height: 20px;
  cursor: pointer;
`

export const ErrorContainer = styled.div`
  font-size: 12px;
  font-weight: 600;
  color: red;
  transition: all 0.2s ease;
  height: 6px;
  margin-left: 5px;
`
