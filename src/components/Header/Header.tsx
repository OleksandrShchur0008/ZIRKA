import { Details, Navbar } from "components"
import {
  BarContainer,
  BarImg,
  CallLink,
  HeaderContainer,
  Title,
} from "./styles"
import { barbeige } from "assets"
import { Link } from "react-router-dom"

export default function Header() {
  return (
    <HeaderContainer>
      <Title>ZIRKA</Title>
      <Navbar />
      <Details />
      <CallLink to="/contact">ЗАТЕЛЕФОНУВАТИ</CallLink>
      <BarContainer>
        <Link to={"/mobilenavigation"}>
          <BarImg src={barbeige} />
        </Link>
      </BarContainer>
    </HeaderContainer>
  )
}
