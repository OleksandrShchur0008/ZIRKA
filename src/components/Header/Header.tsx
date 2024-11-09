import { Details, Navbar } from "components"
import {
  BarContainer,
  BarImg,
  CallLink,
  HeaderContainer,
  Title,
} from "./styles"
import { bar } from "assets"

export default function Header() {
  return (
    <HeaderContainer>
      <Title>ZIRKA</Title>
      <Navbar />
      <Details />
      <CallLink to="/contact">ЗАТЕЛЕФОНУВАТИ</CallLink>
      <BarContainer>
        <BarImg src={bar} />
      </BarContainer>
    </HeaderContainer>
  )
}
