import { Details, Navbar } from "components"
import {
  FirstPart,
  FooterContainer,
  LinksContainer,
  StyledLinks,
  Rights,
  SecondPart,
  Title,
} from "./styles"

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
        <LinksContainer>
          <StyledLinks to="/offerdeal">Договір оферти</StyledLinks>
          <StyledLinks to="/privacypolicy">
            Політика конфіденційності
          </StyledLinks>
        </LinksContainer>
      </SecondPart>
    </FooterContainer>
  )
}
