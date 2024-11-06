import styled from "@emotion/styled"
import { Link } from "react-router-dom"
import { colors } from "styles/colors"

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
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
`
