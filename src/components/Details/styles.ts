import styled from "@emotion/styled"
import { Link } from "react-router-dom"
import { colors } from "styles/colors"

export const DetailsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 100px;
`

export const Info = styled.h4`
  display: flex;
  font-size: 16px;
  font-weight: 400;
  color: ${colors.primaryGrey};
`

export const LoginLink = styled(Link)<{ isActive: boolean }>`
  display: flex;
  text-decoration: none;
  font-size: 16px;
  color: ${({ isActive }) =>
    isActive ? colors.primaryBeige : colors.primaryBlack};

  border-bottom: ${({ isActive }) => (isActive ? "2px solid" : "none")};

  &:hover {
    color: ${colors.primaryBeige};
  }
`
