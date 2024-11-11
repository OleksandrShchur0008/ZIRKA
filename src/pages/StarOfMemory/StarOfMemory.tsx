import { Button, Footer, Header, QAPart } from "components"
import {
  AvatarImg,
  ButtonImgContainer,
  Card,
  CardsBox,
  Comments,
  DescriptionContainer,
  FifthContainer,
  FifthImg,
  FirstPart,
  FourthContainer,
  HeaderTitle,
  Name,
  OrderDescription,
  OrderDiscountPrice,
  OrderTitle,
  OrderWithoutDiscountPrice,
  QRCodeImg,
  QRCodeImgContainer,
  Row,
  SecondPart,
  Source,
  StarOfMemoryContainer,
  StarOfMemoryWrapper,
  StarText,
  StyledRow,
  StyledTitlev2,
  ThirdContainer,
  VideoImg,
  VideosContainer,
  BuyButtonContainer,
  ButtonOnImgContainer,
} from "./styles"
import {
  CardHeader,
  CardRow,
  CardsContainer,
  Description,
  FirstContainer,
  ForthImage,
  Line,
  SecondContainer,
  StyledTitle,
} from "pages/Home/styles"
import {
  arrowleft,
  arrowright,
  avatar1,
  avatar2,
  avatar3,
  avatar4,
  avatar5,
  avatar6,
  fifthimg,
  fourthimg,
  qrcodeimg,
  video1,
  video2,
  video3,
} from "assets"
import { colors } from "styles/colors"
import { useNavigate } from "react-router-dom"
import { Title } from "components/Header/styles"
import { ArrowButton, Arrows, ButtonsContainer } from "pages/About/styles"
import { useState } from "react"

export default function StarOfMemory() {
  const navigate = useNavigate()
  const [isAlternate, setIsAlternate] = useState(false)

  const toggleContent = (direction: string) => {
    setIsAlternate(direction === "right")
  }
  return (
    <StarOfMemoryWrapper>
      <Header />
      <StarOfMemoryContainer>
        <FirstContainer>
          <HeaderTitle>
            <Row>
              <StyledTitle>УСІ</StyledTitle>
              <StyledTitle style={{ color: colors.primaryBlack }}>
                &nbsp;ЗАПИСИ, ФОТО ТА
              </StyledTitle>
            </Row>
            <Row>
              <StyledTitle style={{ color: colors.primaryBlack }}>
                ВІДЕО&nbsp;
              </StyledTitle>
              <StyledTitle>ЗБЕРІГАТИМУТЬСЯ</StyledTitle>
            </Row>
            <StyledTitle>ВІЧНІСТЬ</StyledTitle>
          </HeaderTitle>
          <ButtonImgContainer>
            <ButtonOnImgContainer>
              <Button onClick={() => navigate("/starofmemory")} />
            </ButtonOnImgContainer>
            <ForthImage src={fourthimg} />
          </ButtonImgContainer>
          <StyledTitle
            style={{
              fontSize: "190px",
              margin: "0px 0px 100px 0px",
              textAlign: "center",
            }}
          >
            ВСЕ ЯК НА ДОЛОНІ
          </StyledTitle>
        </FirstContainer>
        <SecondContainer style={{ height: "1100px" }}>
          <QRCodeImgContainer>
            <QRCodeImg src={qrcodeimg} alt="" />
          </QRCodeImgContainer>
          <CardsContainer>
            <CardRow>
              <StyledTitle>01</StyledTitle>
              <CardHeader>
                Можливості для
                <br /> пам'ятних записів
              </CardHeader>
              <Description>
                Більше, ніж просто QR-код: Наша зірка
                <br /> пам'яті поставляється з меморіальною
                <br /> сторінкою, яку ви можете налаштувати.
                <br /> Поділіться біографією, фотографіями та
                <br /> відео - скільки завгодно. Інші люди також
                <br /> можуть висловити свої співчуття і зробити
                <br /> внесок на меморіальній сторінці. Тільки ви і<br /> люди,
                яких ви запросили, можете вносити
                <br /> зміни на сторінку пам'яті.
              </Description>
            </CardRow>
            <Line />
            <CardRow>
              <StyledTitle>02</StyledTitle>
              <CardHeader>
                Необмежений
                <br /> обсяг пам'яті
              </CardHeader>
              <Description>
                Насолоджуйтесь необмеженим сховищем
                <br /> для всіх ваших спогадів. Кількість
                <br /> фотографій, відео та аудіофайлів також не
                <br /> обмежена.
              </Description>
            </CardRow>
            <Line />
            <CardRow>
              <StyledTitle>03</StyledTitle>
              <CardHeader>
                Приватний та
                <br /> публічний режим
              </CardHeader>
              <Description>
                Ви можете вибрати між приватним і публічним
                <br /> профілем. У публічному режимі профіль стає видимим
                <br /> для всіх одразу після сканування QR-коду. У<br />{" "}
                приватному режимі відвідувачі профілю мають
                <br /> можливість увійти за допомогою логіна і пароля.
              </Description>
            </CardRow>
            <Line />
            <CardRow>
              <StyledTitle>04</StyledTitle>
              <CardHeader>
                Безпека в разі крадіжки
                <br /> або пошкодження
              </CardHeader>
              <Description>
                Зірка пам'яті виготовлена з нержавіючого
                <br /> алюмінію і є стійкою до атмосферних
                <br /> впливів. В якості клею ми використовуємо
                <br /> запатентовану плівку 3М, яка витримує
                <br /> будь-які температури та погодні умови.
              </Description>
            </CardRow>
            <Line />
            <CardRow>
              <StyledTitle>05</StyledTitle>
              <CardHeader>
                Одноразовий платіж за довічне обслуговування
              </CardHeader>
              <Description>
                Здійснивши одноразовий платіж, ви
                <br /> отримуєте довічний доступ до сторінок
                <br /> пам'яті без додаткових витрат.
              </Description>
            </CardRow>
            <Line />
          </CardsContainer>
        </SecondContainer>
        <ThirdContainer>
          <FirstPart>
            <StyledRow>
              <Title>ZIRKA</Title>
              <StarText>Зірка пам'яті</StarText>
            </StyledRow>
            <FifthImg src={fifthimg} />
          </FirstPart>
          <SecondPart>
            <OrderTitle>ОФОРМИТИ ЗАМОВЛЕННЯ:</OrderTitle>
            <StyledRow style={{ margin: "30px 0px 190px 0px" }}>
              <Description>
                Придбано понад 2187
                <br /> разів за останні 2 місяці
              </Description>
              <Description>
                Збережіть найдорожчі спогади на вічність
                <br /> і поділіться ними зі своїми близькими
              </Description>
            </StyledRow>
            <OrderWithoutDiscountPrice>₴2,050.00 UAH</OrderWithoutDiscountPrice>
            <StyledRow>
              <OrderDiscountPrice>₴1,290.00 UAH</OrderDiscountPrice>
              <BuyButtonContainer>
                <Button name="ПРИДБАТИ" />
              </BuyButtonContainer>
            </StyledRow>
            <StyledRow>
              <OrderDescription>
                Знижка -40% на зірку пам'яті до 30.09
              </OrderDescription>
              <OrderDescription>
                Податки включені. Вартість доставки 
                <br /> розраховується при оформленні замовлення.
              </OrderDescription>
              <OrderDescription></OrderDescription>
            </StyledRow>
          </SecondPart>
        </ThirdContainer>
        <FourthContainer>
          <div>
            <StyledTitlev2>Реальні відгуки</StyledTitlev2>
            <Row>
              <StyledTitlev2>клієнтів про</StyledTitlev2>
              <StyledTitlev2 style={{ color: colors.primaryBeige }}>
                &nbsp;ZIRKA
              </StyledTitlev2>
            </Row>
          </div>
          <CardsBox>
            <Card>
              <AvatarImg src={avatar1} />
              <DescriptionContainer>
                <Name>Юлія Яценко</Name>
                <Source>@someofourstudents</Source>
                <Comments>
                  Мені стало відомо про цей QR-код у TikTok, і я маю сказати, що
                  це гарний спосіб зберегти і поділитися спогадами.
                </Comments>
              </DescriptionContainer>
            </Card>
            <Card>
              <AvatarImg src={avatar2} />
              <DescriptionContainer>
                <Name>Сергій</Name>
                <Source>@someofourstudents</Source>
                <Comments>
                  Спочатку я був налаштований скептично, але зірка пам'яті
                  переконала мене. Простота і здатність зберегти пам'ять про мою
                  матір безцінні.
                </Comments>
              </DescriptionContainer>
            </Card>
            <Card>
              <AvatarImg src={avatar3} />
              <DescriptionContainer>
                <Name>Алина Кириленко</Name>
                <Source>@someofourstudents</Source>
                <Comments>
                  После потери второй половинки, я часто чувствовала себя
                  одинокой. Ваш продукт помог мне сохранить прекрасные моменты и
                  поделиться ими с другими.
                </Comments>
              </DescriptionContainer>
            </Card>
            <Card>
              <AvatarImg src={avatar4} />
              <DescriptionContainer>
                <Name>Наталя Бойко</Name>
                <Source>@someofourstudents</Source>
                <Comments>
                  Публікація на сторінці пам'яті мого сина була благословенням
                  для мене. Відрадно бачити, як багато людей подивилися його
                  життя і як багатьом буде його не вистачати. Дякую, Пам'ятай
                  назавжди, за цей простір пов'язаності.
                </Comments>
              </DescriptionContainer>
            </Card>
            <Card>
              <AvatarImg src={avatar5} />
              <DescriptionContainer>
                <Name>Галина Павлишина</Name>
                <Source>@someofourstudents</Source>
                <Comments>
                  Моя мама завжди розповідала про свій досвід в юності. Тепер я
                  можу бачити всі ці моменти на фотографіях і відео. Ніби ми
                  подорожуємо їхніми спогадами разом.
                </Comments>
              </DescriptionContainer>
            </Card>
            <Card>
              <AvatarImg src={avatar6} />
              <DescriptionContainer>
                <Name>Наталя Бойко</Name>
                <Source>@someofourstudents</Source>
                <Comments>
                  Публікація на сторінці пам'яті мого сина була благословенням
                  для мене. Відрадно бачити, як багато людей подивилися його
                  життя і як багатьом буде його не вистачати. Дякую, Пам'ятай
                  назавжди, за цей простір пов'язаності.
                </Comments>
              </DescriptionContainer>
            </Card>
          </CardsBox>
        </FourthContainer>
        <FifthContainer>
          <div>
            <StyledTitlev2>Реальні відгуки</StyledTitlev2>
            <StyledRow>
              <StyledTitlev2>клієнтів про</StyledTitlev2>
              <StyledTitlev2 style={{ color: colors.primaryBeige }}>
                &nbsp;ZIRKA
              </StyledTitlev2>
              <ButtonsContainer>
                <ArrowButton onClick={() => toggleContent("left")}>
                  <Arrows src={arrowleft} />
                </ArrowButton>
                <ArrowButton onClick={() => toggleContent("right")}>
                  <Arrows src={arrowright} />
                </ArrowButton>
              </ButtonsContainer>
            </StyledRow>
          </div>
          <VideosContainer>
            <VideoImg src={video1} alt="" />
            <VideoImg src={video2} alt="" />
            <VideoImg src={video3} alt="" />
          </VideosContainer>
        </FifthContainer>
        <QAPart />
        <Footer />
      </StarOfMemoryContainer>
    </StarOfMemoryWrapper>
  )
}
