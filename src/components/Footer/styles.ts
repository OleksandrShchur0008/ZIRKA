import styled from "@emotion/styled"
import { Link } from "react-router-dom"
import { colors } from "styles/colors"

export const FooterContainer = styled.div`
  display: flex;
  justify-content: end;
  gap: 400px;
  width: 100%;
  padding: 50px 60px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0px;
    padding: 40px 10px;
  }
`

export const FirstPart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  gap: 60px;

  @media (max-width: 768px) {
    display: none;
  }
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

  @media (max-width: 768px) {
    justify-content: end;
  }
`

export const MobileNavbarContainer = styled.h6`
  display: none;
  @media (max-width: 768px) {
    display: flex;
  }
`

export const Rights = styled.h6`
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: 400;
  color: ${colors.primaryBlack};

  @media (max-width: 768px) {
    display: none;
  }
`

export const LinksContainer = styled.div`
  display: flex;
  gap: 30px;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    align-items: end;
    gap: 18px;
  }
`

export const StyledLinks = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 20px;
  color: ${colors.primaryGrey};

  @media (max-width: 768px) {
    font-size: 13px;
  }
`

export const MobileInfo = styled.h4`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    font-size: 16px;
    font-weight: 400;
    color: ${colors.primaryGrey};
    line-height: 24px;
  }
`

export const MobileRow = styled.div`
  @media (max-width: 768px) {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-around;
  }
`

export const MobileRights = styled.h6`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    font-size: 12px;
    font-weight: 400;
    color: ${colors.primaryBlack};
  }
`
