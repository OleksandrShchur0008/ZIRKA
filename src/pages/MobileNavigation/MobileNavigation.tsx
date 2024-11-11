import { BarContainer, BarImg } from "components/Header/styles"
import {
  CallLink,
  ExitImg,
  ImagesContainer,
  Info,
  LoginLink,
  NavigationContainer,
  NavigationHeader,
  NavigationLink,
  NavigationLinksContainer,
  NavigationMainContent,
  NavigationWrapper,
  QRCodeBackgroundImg,
  StyledRow,
  Title,
} from "./styles"
import { useNavigate } from "react-router-dom"
import { barwhite, exit, qrcodebackground } from "assets"
import { LanguageSelector } from "components"

export default function MobileNavigation() {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(-1)
  }
  return (
    <NavigationWrapper>
      <NavigationContainer>
        <NavigationHeader>
          <Title>ZIRKA</Title>
          <CallLink to={"/contact"}>Зателефонувати</CallLink>
          <BarContainer onClick={handleClick}>
            <BarImg src={barwhite} />
          </BarContainer>
        </NavigationHeader>

        <NavigationMainContent>
          <NavigationLinksContainer>
            <NavigationLink to={"/home"}>Головна</NavigationLink>
            <NavigationLink to={"/starofmemory"}>Зірка пам'яті</NavigationLink>
          </NavigationLinksContainer>
          <NavigationLink to={"/about"} style={{ alignItems: "flex-start" }}>
            Про нас
          </NavigationLink>
          <NavigationLinksContainer>
            <NavigationLink to={"/contact"}>Контакти</NavigationLink>
          </NavigationLinksContainer>
          {/* <NavigationLink to={"/wholesaleoffers"}>Оптові пропозиції</NavigationLink> */}
          <Info>
            +380 66 122 45 17
            <br />
            instagram@ZIRKA
          </Info>
          <StyledRow>
            <LanguageSelector />
            <LoginLink to="/login">Вхід у додаток</LoginLink>
          </StyledRow>
        </NavigationMainContent>
        
        <ImagesContainer>
          <QRCodeBackgroundImg src={qrcodebackground} />
          <ExitImg
            src={exit}
            onClick={handleClick}
            style={{ marginTop: "50px" }}
          />
        </ImagesContainer>
      </NavigationContainer>
    </NavigationWrapper>
  )
}
