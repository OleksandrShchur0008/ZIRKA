import { Footer, Header } from "components"
import { FirstImage, HomeWrapper, MainContent, SecondImage, ThirdImage } from "./styles"
import { firstimg, secondimg, thirdimg } from "assets"

export default function Home() {
  return (
    <HomeWrapper>
      <Header />
      <MainContent >
        <FirstImage src={firstimg}/>
        <SecondImage src={secondimg} />
        <ThirdImage src={thirdimg} />
      </MainContent>
      <Footer/>
    </HomeWrapper>
  )
}
