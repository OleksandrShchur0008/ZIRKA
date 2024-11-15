import { Footer, Header, QAPart } from "components"
import {
  AboutWrapper,
  ContentWrapper,
  ButtonsContainer,
  Description,
  AboutFirstContainer,
  AboutMainContent,
  ArrowButton,
  PhoneImg,
  AboutStyledTitle,
  Title,
  FirstContentToChange,
  SecondContentToChange,
  Arrows,
  QAPartContainer,
} from "./styles"
import { arrowleft, arrowright, phone } from "assets"
import { useState } from "react"

const firstContent = {
  title: "Наше натхнення",
  description:
    "У серцях людей і в спогадах, якими ми ділимося з нашими близькими, ми знаходимо наше найбільше натхнення. Ми глибоко віримо в трансформаційну силу спогадів, тому що вони сформували наше власне життя. Наша подорож розпочалася з глибокої потреби-бажання перетворити дорогоцінні моменти, які зачіпають наше серце сьогодні, на спогади, які назавжди залишаться в наших серцях.",
}

const secondContent = {
  title: "Взаємодія",
  description:
    "Наше зобов'язання охоплює час і простір, і воно випливає з нашого власного досвіду. Ми створили платформу, щоб розповідати історії, зберігати спогади та вшановувати близьких, тому що ми самі знаємо, наскільки це важливо. Ми пишаємося тим, що є вашим надійним супутником у вашій особистій подорожі, тому що ми знаємо з власного досвіду, як спогади можуть збагатити життя.",
}

export default function About() {
  const [isAlternate, setIsAlternate] = useState(false)

  const toggleContent = (direction: string) => {
    setIsAlternate(direction === "right")
  }

  return (
    <AboutWrapper>
      <Header />
      <AboutFirstContainer>
        <PhoneImg src={phone} />
        <AboutMainContent>
          <AboutStyledTitle>ZIRKA</AboutStyledTitle>
          <ContentWrapper>
            <FirstContentToChange isAlternate={isAlternate}>
              <Title>{firstContent.title}</Title>
              <Description>{firstContent.description}</Description>
            </FirstContentToChange>
            <SecondContentToChange isAlternate={isAlternate}>
              <Title>{secondContent.title}</Title>
              <Description>{secondContent.description}</Description>
            </SecondContentToChange>
          </ContentWrapper>
          <ButtonsContainer>
            <ArrowButton onClick={() => toggleContent("left")}>
              <Arrows src={arrowleft} />
            </ArrowButton>
            <ArrowButton onClick={() => toggleContent("right")}>
              <Arrows src={arrowright} />
            </ArrowButton>
          </ButtonsContainer>
        </AboutMainContent>
      </AboutFirstContainer>
      <QAPartContainer>
        <QAPart />
      </QAPartContainer>
      <Footer />
    </AboutWrapper>
  )
}
