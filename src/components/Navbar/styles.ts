import styled from "@emotion/styled"
import { Link } from "react-router-dom"
import { colors } from "styles/colors"

export const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;

  @media(max-width: 768px) {
    display: none;
  }
`

export const NavbarLink = styled(Link)<{ isActive: boolean }>`
  text-decoration: none;
  font-size: 16px;
  color: ${({ isActive }) =>
    isActive ? colors.primaryBeige : colors.primaryGrey};

  border-bottom: ${({ isActive }) => (isActive ? "2px solid" : "none")};

  &:hover {
    color: ${colors.primaryBeige};
  }
`
