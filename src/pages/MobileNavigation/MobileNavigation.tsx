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
import { useInView } from "react-intersection-observer"
import { useEffect } from "react"
import gsap from "gsap"

export default function MobileNavigation() {
  const navigate = useNavigate()

  const { ref: firstRef, inView: firstInView } = useInView({ triggerOnce: true, threshold: 0.01 });

  useEffect(() => {
    if (firstInView) {
      gsap.fromTo(
        "#right-to-left-anim",
        { translateX: "140px", opacity: 0.5 },
        { translateX: "0", opacity: 1, duration: 1 }
      );
    }
  }, [firstInView]);

  useEffect(() => {
    if (firstInView) {
      gsap.fromTo(
        "#left-to-right-anim",
        { translateX: "-140px", opacity: 0.1 },
        { translateX: "0", opacity: 1, duration: 1 }
      );
    }
  }, [firstInView]);

  const handleClick = () => {
    navigate(-1)
  }
  return (
    <NavigationWrapper>
      <NavigationContainer ref={firstRef}>
        <NavigationHeader>
          <Title>ZIRKA</Title>
          <CallLink to={"/contact"}>Зателефонувати</CallLink>
          <BarContainer onClick={handleClick}>
            <BarImg src={barwhite} />
          </BarContainer>
        </NavigationHeader>

        <NavigationMainContent>
          <NavigationLinksContainer>
            <NavigationLink to={"/home"} id="right-to-left-anim">Головна</NavigationLink>
            <NavigationLink to={"/starofmemory"} id="right-to-left-anim">Зірка пам'яті</NavigationLink>
          </NavigationLinksContainer>
          <NavigationLink to={"/about"} id="left-to-right-anim" style={{ alignItems: "flex-start" }}>
            Про нас
          </NavigationLink>
          <NavigationLinksContainer>
            <NavigationLink to={"/contact"} id="right-to-left-anim">Контакти</NavigationLink>
          </NavigationLinksContainer>
          {/* <NavigationLink to={"/wholesaleoffers"}>Оптові пропозиції</NavigationLink> */}
          <Info id="left-to-right-anim">
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
