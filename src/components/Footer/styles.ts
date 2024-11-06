import styled from "@emotion/styled"
import { Link } from "react-router-dom"
import { colors } from "styles/colors"

export const FooterContainer = styled.div`
  display: flex;
  justify-content: end;
  gap: 400px;
  width: 100%;
`

export const FirstPart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  gap: 60px;
`

export const SecondPart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  gap: 70px;
`

export const Title = styled.h1`
  display: flex;
  align-items: center;
  font-size: 30px;
  font-weight: 400;
  color: ${colors.primaryGrey};
`

export const Rights = styled.h6`
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: 400;
  color: ${colors.primaryBlack};
`

export const LinksContainer = styled.div`
  display: flex;
  gap: 30px;
`

export const StyledLinks = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 20px;
  color: ${colors.primaryGrey};
`
