import { Button, Footer, Header } from "components"
import {
  FirstImage,
  HomeWrapper,
  FirstContainer,
  SecondImage,
  ThirdImage,
  StyledTitle,
  DescriptionButtonContainer,
  Description,
  FirstPart,
  SecondPart,
  Row,
  Column,
  ScrollDownLink,
  StyledRow,
  SecondContainer,
  CardContainer,
  CardsContainer,
  TitleForDescription,
} from "./styles"
import { arrow, firstimg, secondimg, thirdimg } from "assets"
import { colors } from "styles/colors"
import { useNavigate } from "react-router-dom"

export default function Home() {
  const navigate = useNavigate()

  const handleScrollDown = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()

    window.scrollBy({
      top: 1000,
      behavior: "smooth",
    })
  }

  return (
    <HomeWrapper>
      <Header />
      <FirstContainer>
        <FirstPart>
          <Row>
            <StyledTitle>СПОГАДИ</StyledTitle>
            <StyledTitle style={{ color: colors.primaryBlack }}>
              &nbsp;НА ВІКИ
            </StyledTitle>
          </Row>
          <ThirdImage src={thirdimg} />
        </FirstPart>
        <SecondPart>
          <FirstImage src={firstimg} />
          <Column>
            <StyledTitle style={{ marginLeft: "50px" }}>
              ЗІРКА ПАМ'ЯТІ
            </StyledTitle>
            <StyledRow>
              <DescriptionButtonContainer>
                <Description>
                  Проєкт натхненний теорією
                  <br />
                  подовженого зв'язку
                  <br />
                  (Continuing Bonds Theory)
                </Description>
                <Button onClick={() => navigate("/starofmemory")} />
              </DescriptionButtonContainer>
              <SecondImage src={secondimg} />
              <ScrollDownLink
                to={""}
                isActive={false}
                onClick={handleScrollDown}
              >
                <img src={arrow} alt="" />
                ГОРТАЙ ВНИЗ
              </ScrollDownLink>
            </StyledRow>
          </Column>
        </SecondPart>
      </FirstContainer>
      <SecondContainer>
        <DescriptionButtonContainer>
          <Description>Індивідуальна сторінка пам'яті:</Description>
          <Description>
            Зірка пам'яті - це QR-код для
            <br /> індивідуально розроблених
            <br /> меморіальних сторінок. Діліться
            <br /> біографіями, текстами,
            <br /> фотографіями, відео та
            <br />
            спогадами. QR-код посилається
            <br /> на персональну сторінку пам'яті.
            <br />
            Ідеально підходить для
            <br /> надгробків та урн.
            <br /> Формуйте свою пам'ять.
          </Description>
          <Button onClick={() => navigate("/starofmemory")} />
        </DescriptionButtonContainer>
        <CardsContainer>
          <CardContainer style={{ paddingTop: "0px" }}>
            <StyledTitle>01</StyledTitle>
            <TitleForDescription style={{marginLeft: "150px"}}>
              Мета компанії зберегти
              <br /> всі дані назавжди
            </TitleForDescription>
            <Description>
              Зберігайте кожен цінний спогад про своїх
              <br /> близьких у безпеці
            </Description>
          </CardContainer>
          <CardContainer>
            <StyledTitle>02</StyledTitle>
            <TitleForDescription>
              Захист даних
              <br /> гарантовано
            </TitleForDescription>
            <Description>
              Ви самі вирішуєте, кому дозволено
              <br /> дивитися на зірку пам'яті
            </Description>
          </CardContainer>
          <CardContainer>
            <StyledTitle>03</StyledTitle>
            <TitleForDescription style={{marginLeft: "250px"}}>
              Довговічність зірки
              <br /> пам'яті
            </TitleForDescription>
            <Description>
              Як основний матеріал ми використовуємо анодований
              <br /> алюміній, термін служби мінімум 300 років
            </Description>
          </CardContainer>
          <CardContainer>
            <StyledTitle>04</StyledTitle>
            <TitleForDescription style={{marginLeft: "100px"}}>Оплата один раз</TitleForDescription>
            <Description>
              Довічне обслуговування без будь-яких
              <br /> прихованих витрат або підписних пасток
            </Description>
          </CardContainer>
        </CardsContainer>
      </SecondContainer>
      <Footer />
    </HomeWrapper>
  )
}
