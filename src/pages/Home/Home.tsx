import { Button, Footer, Header, QAPart } from "components"
import {
  FirstImage,
  HomeWrapper,
  HomeFirstContainer,
  SecondImage,
  ThirdImage,
  StyledTitle,
  FirstDescriptionButtonContainer,
  Description,
  HomeFirstPart,
  HomeRow,
  HomeColumn,
  ScrollDownLink,
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
  MainButtonContainer,
  MobileDescriptionColumn,
  MobileForthImage,
  FourthContainer,
  OverlayTitle,
  MobileBluredQRCodeImg,
  OverlayDescription,
  DescriptionContainer,
  MobileMainButtonContainer,
  HomeSecondPart,
  HomeStyledRow,
  SecondContainerTitle,
  SecondDescriptionButtonContainer,
  MobileImagesContainer,
  MobileSharedStyleImage,
} from "./styles"
import {
  arrow,
  bluredqrcode,
  firstimg,
  fourthimg,
  mobilefourthimg,
  secondimg,
  thirdimg,
} from "assets"
import { colors } from "styles/colors"
import { useNavigate } from "react-router-dom"
import { Title } from "components/Header/styles"
import { useInView } from "react-intersection-observer"
import { useEffect } from "react"
import gsap from "gsap"
import { OrderTitle } from "pages/StarOfMemory/styles"

export default function Home() {
  const navigate = useNavigate()
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  })
  // useEffect(() => {
  //   const anim = gsap.fromTo(
  //     "#spogady-text",
  //     { translateX: "-140px", opacity: 0.2 },
  //     { translateX: "0", opacity: 1, duration: 2 },
  //   )
  //   return () => anim.kill()
  // }, [inView])

  const handleScrollDown = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()

    window.scrollBy({
      top: 888,
      behavior: "smooth",
    })
  }

  return (
    <HomeWrapper>
      <Header />
      <HomeContainer>
        <HomeFirstContainer ref={ref}>
          <HomeFirstPart>
            <HomeRow id="spogady-text">
              <StyledTitle>СПОГАДИ</StyledTitle>
              <StyledTitle style={{ color: colors.primaryBlack }}>
                &nbsp;НА ВІКИ
              </StyledTitle>
            </HomeRow>
            <ThirdImage src={thirdimg} />
          </HomeFirstPart>
          <HomeSecondPart>
            <FirstImage src={firstimg} />
            <HomeColumn>
              <StyledTitle>ЗІРКА ПАМ'ЯТІ</StyledTitle>
              <HomeStyledRow>
                <FirstDescriptionButtonContainer>
                  <Description>
                    Проєкт натхненний теорією
                    <br />
                    подовженого зв'язку
                    <br />
                    (Continuing Bonds Theory)
                  </Description>
                  <MainButtonContainer>
                    <Button onClick={() => navigate("/starofmemory")} />
                  </MainButtonContainer>
                  <MobileImagesContainer>
                    <MobileSharedStyleImage src={secondimg} />
                    <MobileSharedStyleImage src={firstimg} />
                    <MobileSharedStyleImage src={thirdimg} />
                  </MobileImagesContainer>
                  <MobileMainButtonContainer>
                    <Button onClick={() => navigate("/starofmemory")} />
                  </MobileMainButtonContainer>
                </FirstDescriptionButtonContainer>
                <SecondImage src={secondimg} />
                <ScrollDownLink
                  to={""}
                  isActive={false}
                  onClick={handleScrollDown}
                >
                  <ArrowImg src={arrow} alt="" />
                  ГОРТАЙ ВНИЗ
                </ScrollDownLink>
              </HomeStyledRow>
            </HomeColumn>
          </HomeSecondPart>
        </HomeFirstContainer>
        <SecondContainer>
          <SecondDescriptionButtonContainer>
            <SecondContainerTitle>
              Індивідуальна сторінка пам'яті:
            </SecondContainerTitle>
            <Description>
              Зірка пам'яті - це QR-код для індивідуально розроблених
              меморіальних сторінок. Діліться біографіями, текстами,
              фотографіями, відео та спогадами. QR-код посилається на
              персональну сторінку пам'яті. Ідеально підходить для надгробків та
              урн. Формуйте свою пам'ять.
            </Description>
            <MainButtonContainer>
              <Button onClick={() => navigate("/starofmemory")} />
            </MainButtonContainer>
          </SecondDescriptionButtonContainer>
          <CardsContainer>
            <CardRow style={{ marginTop: "0px" }}>
              <StyledTitle>01</StyledTitle>
              <MobileDescriptionColumn>
                <CardHeader>
                  Мета компанії зберегти
                  <br /> всі дані назавжди
                </CardHeader>
                <Description>
                  Зберігайте кожен цінний спогад про своїх близьких у безпеці
                </Description>
              </MobileDescriptionColumn>
            </CardRow>
            <Line />
            <CardRow>
              <StyledTitle>02</StyledTitle>
              <MobileDescriptionColumn>
                <CardHeader>
                  Захист даних
                  <br /> гарантовано
                </CardHeader>
                <Description>
                  Ви самі вирішуєте, кому дозволено дивитися на зірку пам'яті
                </Description>
              </MobileDescriptionColumn>
            </CardRow>
            <Line />
            <CardRow>
              <StyledTitle>03</StyledTitle>
              <MobileDescriptionColumn>
                <CardHeader>
                  Довговічність зірки
                  <br /> пам'яті
                </CardHeader>
                <Description>
                  Як основний матеріал ми використовуємо анодований алюміній,
                  термін служби мінімум 300 років
                </Description>
              </MobileDescriptionColumn>
            </CardRow>
            <Line />
            <CardRow>
              <StyledTitle>04</StyledTitle>
              <MobileDescriptionColumn>
                <CardHeader>Оплата один раз</CardHeader>
                <Description>
                  Довічне обслуговування без будь-яких прихованих витрат або
                  підписних пасток
                </Description>
              </MobileDescriptionColumn>
            </CardRow>
            <Line />
          </CardsContainer>
          <MobileMainButtonContainer>
            <Button onClick={() => navigate("/starofmemory")} />
          </MobileMainButtonContainer>
        </SecondContainer>
        <ThirdContainer>
          <DescriptionContainer>
            <Title>ZIRKA</Title>
            <OrderTitle>
              ПРОЄКТ НАТХНЕННИЙ ТЕОРІЄЮ
              <br /> ПРОДОВЖЕНОГО ЗВ'ЯЗКУ  
              <OrderTitle style={{ color: colors.primaryBlack }}>
                (CONTINUING BONDS THEORY)
              </OrderTitle>
            </OrderTitle>
          </DescriptionContainer>
          <DescriptionContainer>
            <Title>Про проєкт:</Title>
            <Description>
              Ця теорія стверджує, що замість повного «відпускання» померлого,
              люди
              <br /> можуть продовжувати зберігати з ним емоційний зв'язок. Цей
              зв'язок
              <br /> виражається через такі дії, як створення меморіального
              альбому, участь у<br /> ритуалах пам'яті або збереження спогадів.
              Подібні практики допомагають
              <br /> адаптуватися до життя без фізичної присутності померлого,
              але при
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
          </DescriptionContainer>
        </ThirdContainer>
        <FourthContainer>
          <ForthImage src={fourthimg} />
          <MobileForthImage src={mobilefourthimg} />
          <OverlayBox>
            <HomeRow>
              <OverlayTitle>
                СКАНУВАННЯ
                <br /> ЗІРКИ ПАМ'ЯТІ
              </OverlayTitle>
              <BluredQRCodeImg src={bluredqrcode} alt="" />
            </HomeRow>
            <OverlayDescription>
              Почніть свою подорож зі сканування за допомогою смартфона.
              Відкривається вікно у світ, повний спогадів.
            </OverlayDescription>
            <HomeRow>
              <MobileBluredQRCodeImg src={bluredqrcode} alt="" />
            </HomeRow>
          </OverlayBox>
        </FourthContainer>
        <QAPart />
        <Footer />
      </HomeContainer>
    </HomeWrapper>
  )
}
