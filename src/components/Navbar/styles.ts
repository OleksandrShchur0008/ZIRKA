import styled from "@emotion/styled"
import { Link } from "react-router-dom"
import { colors } from "styles/colors"

export const NavbarWrapper = styled.div`
  display: flex;

  @media (max-width: 768px) {
    display: none;
  }
`

export const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: space-around;
  }
`

export const NavbarLink = styled(Link)<{ isActive: boolean }>`
  text-decoration: none;
  font-size: 16px;
  font-weight: 400;
  color: ${({ isActive }) =>
    isActive ? colors.primaryBeige : colors.primaryGrey};

  border-bottom: ${({ isActive }) => (isActive ? "2px solid" : "none")};

  &:hover {
    color: ${colors.primaryBeige};
  }
`
