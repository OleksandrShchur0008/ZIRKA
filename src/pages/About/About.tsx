import { Footer, Header, QAPart } from "components"
import { AboutWrapper, PhoneImg } from "./styles"
import { phone } from "assets"

export default function About() {
  return (
    <AboutWrapper>
      <Header />
      <PhoneImg src={phone}/>
      <QAPart/>
      <Footer/>
    </AboutWrapper>
  )
}
