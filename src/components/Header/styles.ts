import styled from "@emotion/styled"
import { Link } from "react-router-dom"
import { colors } from "styles/colors"

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 50px 60px;
  gap: 15px;
`

export const Title = styled.h1`
  display: flex;
  align-items: center;
  font-size: 30px;
  font-weight: 400;
  color: ${colors.primaryGrey};
`

export const CallLink = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 16px;
  padding: 20px 50px;
  border-radius: 200px;
  border: 1px solid ${colors.primaryBeige};
  color: ${colors.primaryBeige};

  @media (max-width: 768px) {
    display: none;
  }
`

export const BarContainer = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    cursor: pointer;
  }
`

export const BarImg = styled.img`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    width: 38px;
    height: 38px;
  }
`
