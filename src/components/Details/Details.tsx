import { LanguageSelector } from "components"
import { DetailsContainer, Info, LoginLink } from "./styles"

export default function Details() {
  return (
    <DetailsContainer>
      <Info>
        +380 66 122 45 17
        <br />
        instagram@ZIRKA
      </Info>
      <LanguageSelector/>
      <LoginLink to="/login" isActive={location.pathname === "/login"}>
        Вхід у додаток
      </LoginLink>
    </DetailsContainer>
  )
}
