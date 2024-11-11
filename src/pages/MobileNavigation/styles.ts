import styled from "@emotion/styled"
import { Link } from "react-router-dom"
import { colors } from "styles/colors"

export const NavigationWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background: linear-gradient(
      to bottom,
      ${colors.primaryBeige},
      ${colors.tertiaryBlack}
    );
`

export const NavigationContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`

export const NavigationHeader = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 20px;
    gap: 15px;
`

export const Title = styled.h1`
    display: flex;
    align-items: center;
    font-size: 20px;
    font-weight: 400;
    color: white;
`

export const CallLink = styled(Link)`
    display: flex;
    align-items: center;
    font-size: 16px;
    font-weight: 400;
    color: white;
    text-decoration: underline;
`

export const NavigationMainContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    padding: 20px;
    gap: 15px;
`

export const NavigationLinksContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 100%;
`

export const NavigationLink = styled(Link)`
    text-decoration: none;
    color: white;
    font-size: 50px;
    font-weight: 700;
    padding: 6px 0px;
`

export const Info = styled.h4`
    display: flex;
    font-size: 16px;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.5);
    line-height: 25px;
    padding: 25px 0px;
`

export const StyledRow = styled.div`
  display: flex;
  justify-content: space-between;
`

export const LoginLink = styled(Link)`
    display: flex;
    text-decoration: none;
    font-size: 16px;
    color: white;
`

export const ImagesContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const QRCodeBackgroundImg = styled.img`
  width: 300px;
  height: 260px;
`

export const ExitImg = styled.img`
  position: absolute;
  width: 70px;
  height: 70px;
`
