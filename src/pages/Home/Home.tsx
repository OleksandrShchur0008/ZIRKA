import { Button, Footer, Header, QAPart } from "components"
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
  CardsContainer,
  ThirdContainer,
  ForthImage,
  OverlayBox,
  ArrowImg,
  BluredQRCodeImg,
  CardRow,
  CardHeader,
  Line,
  HomeContainer,
} from "./styles"
import {
  arrow,
  bluredqrcode,
  firstimg,
  fourthimg,
  secondimg,
  thirdimg,
} from "assets"
import { colors } from "styles/colors"
import { useNavigate } from "react-router-dom"
import { Title } from "components/Header/styles"

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
      <HomeContainer>
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
            <StyledTitle>
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
                <ArrowImg src={arrow} alt="" />
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
          <CardRow style={{ marginTop: "0px" }}>
            <StyledTitle>01</StyledTitle>
            <CardHeader>
              Мета компанії зберегти
              <br /> всі дані назавжди
            </CardHeader>
            <Description>
              Зберігайте кожен цінний спогад про своїх
              <br /> близьких у безпеці
            </Description>
          </CardRow>
          <Line />
          <CardRow>
            <StyledTitle>02</StyledTitle>
            <CardHeader>
              Захист даних
              <br /> гарантовано
            </CardHeader>
            <Description>
              Ви самі вирішуєте, кому дозволено
              <br /> дивитися на зірку пам'яті
            </Description>
          </CardRow>
          <Line />
          <CardRow>
            <StyledTitle>03</StyledTitle>
            <CardHeader>
              Довговічність зірки
              <br /> пам'яті
            </CardHeader>
            <Description>
              Як основний матеріал ми використовуємо анодований
              <br /> алюміній, термін служби мінімум 300 років
            </Description>
          </CardRow>
          <Line />
          <CardRow>
            <StyledTitle>04</StyledTitle>
            <CardHeader>Оплата один раз</CardHeader>
            <Description>
              Довічне обслуговування без будь-яких
              <br /> прихованих витрат або підписних пасток
            </Description>
          </CardRow>
          <Line />
        </CardsContainer>
      </SecondContainer>
      <ThirdContainer>
        <StyledRow>
          <Title>ZIRKA</Title>
          <StyledTitle style={{ fontSize: "84px" }}>
            ПРОЄКТ НАТХНЕННИЙ ТЕОРІЄЮ
            <br /> ПРОДОВЖЕНОГО ЗВ'ЯЗКУ  
            <StyledTitle
              style={{ fontSize: "84px", color: colors.primaryBlack }}
            >
              (CONTINUING BONDS THEORY)
            </StyledTitle>
          </StyledTitle>
        </StyledRow>
        <StyledRow style={{alignItems: "end"}}>
          <Title>Про проєкт:</Title>
          <Description>
            Ця теорія стверджує, що замість повного «відпускання» померлого,
            люди
            <br /> можуть продовжувати зберігати з ним емоційний зв'язок. Цей
            зв'язок
            <br /> виражається через такі дії, як створення меморіального
            альбому, участь у<br /> ритуалах пам'яті або збереження спогадів.
            Подібні практики допомагають
            <br /> адаптуватися до життя без фізичної присутності померлого, але
            при
            <br /> цьому зберігати його значущість у житті.
          </Description>
          <Description>
            Основна ідея полягає в тому, що людина не
            <br /> обов'язково повинна «забувати» або «рухатися
            <br /> далі» в традиційному сенсі. Замість цього, вона
            <br /> може інтегрувати пам'ять про близьку людину у<br /> своє
            повсякденне життя, що допомагає пом'якшити
            <br /> біль втрати і знайти сенс у новій реальності.
          </Description>
        </StyledRow>
        <Row style={{ justifyContent: "flex-end" }}>
          <ForthImage src={fourthimg} />
          <OverlayBox>
            <Row>
              <StyledTitle style={{ fontSize: "84px", color: "white" }}>
                СКАНУВАННЯ
                <br /> ЗІРКИ ПАМ'ЯТІ
              </StyledTitle>
              <BluredQRCodeImg src={bluredqrcode} alt="" />
            </Row>
            <Description style={{ color: "white" }}>
              Почніть свою подорож зі сканування за допомогою
              <br /> смартфона. Відкривається вікно у світ, повний
              <br /> спогадів.
            </Description>
          </OverlayBox>
        </Row>
      </ThirdContainer>
      <QAPart />
      <Footer />
      </HomeContainer>
    </HomeWrapper>
  )
}
