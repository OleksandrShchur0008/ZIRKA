import { Details, Navbar } from "components"
import {
  FirstPart,
  FooterContainer,
  LinksContainer,
  StyledLinks,
  Rights,
  SecondPart,
  Title,
  MobileRights,
  MobileNavbarContainer,
  MobileRow,
  MobileInfo,
} from "./styles"
import { NavbarContainer, NavbarLink } from "components/Navbar/styles"

export default function Footer() {
  return (
    <FooterContainer>
      <FirstPart>
        <Navbar />
        <Details />
      </FirstPart>
      <SecondPart>
        <Title>ZIRKA</Title>
        <Rights>ZIRKA. Усі права захищені © 2024</Rights>
        <MobileNavbarContainer>
          <NavbarContainer>
            <NavbarLink to="/home" isActive={location.pathname === "/home"}>
              Головна
            </NavbarLink>
            <NavbarLink
              to="/starofmemory"
              isActive={location.pathname === "/starofmemory"}
            >
              Зірка пам'яті
            </NavbarLink>
            <NavbarLink to="/about" isActive={location.pathname === "/about"}>
              Про нас
            </NavbarLink>
            <NavbarLink
              to="/contact"
              isActive={location.pathname === "/contact"}
            >
              Контакти
            </NavbarLink>
            <NavbarLink
              to="/wholesaleoffers"
              isActive={location.pathname === "/wholesaleoffers"}
            >
              Оптові пропозиції
            </NavbarLink>
          </NavbarContainer>
        </MobileNavbarContainer>
        <MobileRow>
          <MobileInfo>
            +380 66 122 45 17
            <br />
            instagram@ZIRKA
          </MobileInfo>
          <LinksContainer>
            <StyledLinks to="/offerdeal">Договір оферти</StyledLinks>
            <StyledLinks to="/privacypolicy">
              Політика конфіденційності
            </StyledLinks>
          </LinksContainer>
        </MobileRow>
        <MobileRights>ZIRKA. Усі права захищені © 2024</MobileRights>
      </SecondPart>
    </FooterContainer>
  )
}
