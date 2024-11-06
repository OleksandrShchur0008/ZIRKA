import { Details, Navbar } from "components"
import { CallLink, HeaderContainer, Title } from "./styles"

export default function Header() {
  return (
    <HeaderContainer>
      <Title>ZIRKA</Title>
      <Navbar />
      <Details/>
      <CallLink to="/contact">ЗАТЕЛЕФОНУВАТИ</CallLink>
    </HeaderContainer>
  )
}
