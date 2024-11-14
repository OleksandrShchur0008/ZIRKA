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
  SecondContainerTitle,
  RowInHeader,
  MobileThirdContainer,
  HeaderStyledTitle,
  VectorImg,
  Rowv2,
  OrderStyledRow,
  StarOfMemoryFirstContainer,
} from "./styles"
import {
  CardHeader,
  CardRow,
  CardsContainer,
  Description,
  ForthImage,
  Line,
  MobileDescriptionColumn,
  MobileForthImage,
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
  mobilefifthimg,
  mobilefourthimg,
  qrcodeimg,
  vector,
  video1,
  video2,
  video3,
} from "assets"
import { colors } from "styles/colors"
import { useNavigate } from "react-router-dom"
import { Title } from "components/Header/styles"
import { ArrowButton, Arrows, ButtonsContainer } from "pages/About/styles"
import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
import gsap from "gsap"

export default function StarOfMemory() {
  const navigate = useNavigate()
  const [isAlternate, setIsAlternate] = useState(false)

  const { ref: firstRef, inView: firstInView } = useInView({ triggerOnce: true, threshold: 0.01 });
  const { ref: secondRef, inView: secondInView } = useInView({ triggerOnce: true, threshold: 0.01 });

  useEffect(() => {
    if (firstInView) {
      gsap.fromTo(
        "#up-to-down-anim",
        { translateY: "-140px", opacity: 0.2 },
        { translateY: "0", opacity: 1, duration: 2 }
      );
    }
  }, [firstInView]);

  useEffect(() => {
    if (secondInView) {
      gsap.fromTo(
        "#left-to-right-anim",
        { translateX: "-340px", opacity: 0.5 },
        { translateX: "0px",  opacity: 1, duration: 3 },
      );
    }
  }, [secondInView]);

  const toggleContent = (direction: string) => {
    setIsAlternate(direction === "right")
  }
  return (
    <StarOfMemoryWrapper>
      <Header />
      <StarOfMemoryContainer>
        <StarOfMemoryFirstContainer ref={firstRef}>
          <HeaderTitle id="up-to-down-anim">
            <RowInHeader>
              <HeaderStyledTitle>УСІ</HeaderStyledTitle>
              <HeaderStyledTitle style={{ color: colors.primaryBlack }}>
                &nbsp;ЗАПИСИ, ФОТО ТА
              </HeaderStyledTitle>
            </RowInHeader>
            <RowInHeader>
              <HeaderStyledTitle style={{ color: colors.primaryBlack }}>
                ВІДЕО&nbsp;
              </HeaderStyledTitle>
              <HeaderStyledTitle>ЗБЕРІГАТИМУТЬСЯ</HeaderStyledTitle>
            </RowInHeader>
            <HeaderStyledTitle>ВІЧНІСТЬ</HeaderStyledTitle>
          </HeaderTitle>
          <ButtonImgContainer>
            <ButtonOnImgContainer>
              <Button onClick={() => navigate("/starofmemory")} />
            </ButtonOnImgContainer>
            <ForthImage src={fourthimg} />
            <MobileForthImage src={mobilefourthimg} />
          </ButtonImgContainer>
          <SecondContainerTitle>ВСЕ ЯК НА ДОЛОНІ</SecondContainerTitle>
        </StarOfMemoryFirstContainer>
        <SecondContainer ref={secondRef} style={{ height: "1100px" }} >
          <QRCodeImgContainer>
            <QRCodeImg src={qrcodeimg} alt="" />
          </QRCodeImgContainer>
          <CardsContainer id="left-to-right-anim">
            <CardRow>
              <StyledTitle>01</StyledTitle>
              <MobileDescriptionColumn>
                <CardHeader>
                  Можливості для
                  <br /> пам'ятних записів
                </CardHeader>
                <Description>
                  Більше, ніж просто QR-код: Наша зірка пам'яті поставляється з
                  меморіальною сторінкою, яку ви можете налаштувати. Поділіться
                  біографією, фотографіями та відео - скільки завгодно. Інші
                  люди також можуть висловити свої співчуття і зробити внесок на
                  меморіальній сторінці. Тільки ви і люди, яких ви запросили,
                  можете вносити зміни на сторінку пам'яті.
                </Description>
              </MobileDescriptionColumn>
            </CardRow>
            <Line />
            <CardRow>
              <StyledTitle>02</StyledTitle>
              <MobileDescriptionColumn>
                <CardHeader>
                  Необмежений
                  <br /> обсяг пам'яті
                </CardHeader>
                <Description>
                  Насолоджуйтесь необмеженим сховищем для всіх ваших спогадів.
                  Кількість фотографій, відео та аудіофайлів також не обмежена.
                </Description>
              </MobileDescriptionColumn>
            </CardRow>
            <Line />
            <CardRow>
              <StyledTitle>03</StyledTitle>
              <MobileDescriptionColumn>
                <CardHeader>
                  Приватний та
                  <br /> публічний режим
                </CardHeader>
                <Description>
                  Ви можете вибрати між приватним і публічним профілем. У
                  публічному режимі профіль стає видимим для всіх одразу після
                  сканування QR-коду. У приватному режимі відвідувачі профілю
                  мають можливість увійти за допомогою логіна і пароля.
                </Description>
              </MobileDescriptionColumn>
            </CardRow>
            <Line />
            <CardRow>
              <StyledTitle>04</StyledTitle>
              <MobileDescriptionColumn>
                <CardHeader>
                  Безпека в разі крадіжки
                  <br /> або пошкодження
                </CardHeader>
                <Description>
                  Зірка пам'яті виготовлена з нержавіючого алюмінію і є стійкою
                  до атмосферних впливів. В якості клею ми використовуємо
                  запатентовану плівку 3М, яка витримує будь-які температури та
                  погодні умови.
                </Description>
              </MobileDescriptionColumn>
            </CardRow>
            <Line />
            <CardRow>
              <StyledTitle>05</StyledTitle>
              <MobileDescriptionColumn>
                <CardHeader>
                  Одноразовий платіж за довічне обслуговування
                </CardHeader>
                <Description>
                  Здійснивши одноразовий платіж, ви отримуєте довічний доступ до
                  сторінок пам'яті без додаткових витрат.
                </Description>
              </MobileDescriptionColumn>
            </CardRow>
            <Line />
          </CardsContainer>
        </SecondContainer>
        <ThirdContainer>
          <FirstPart>
            <OrderStyledRow>
              <Title>ZIRKA</Title>
              <StarText>Зірка пам'яті</StarText>
            </OrderStyledRow>
            <FifthImg src={fifthimg} />
          </FirstPart>
          <SecondPart>
            <OrderTitle>ОФОРМИТИ ЗАМОВЛЕННЯ:</OrderTitle>
            <OrderStyledRow style={{ margin: "30px 0px 190px 0px" }}>
              <Description>
                Придбано понад 2187
                <br /> разів за останні 2 місяці
              </Description>
              <Description>
                Збережіть найдорожчі спогади на вічність
                <br /> і поділіться ними зі своїми близькими
              </Description>
            </OrderStyledRow>
            <OrderWithoutDiscountPrice>₴2,050.00 UAH</OrderWithoutDiscountPrice>
            <OrderStyledRow>
              <OrderDiscountPrice>₴1,290.00 UAH</OrderDiscountPrice>
              <BuyButtonContainer>
                <Button name="ПРИДБАТИ" />
              </BuyButtonContainer>
            </OrderStyledRow>
            <OrderStyledRow>
              <OrderDescription>
                Знижка -40% на зірку пам'яті до 30.09
              </OrderDescription>
              <OrderDescription>
                Податки включені. Вартість доставки 
                <br /> розраховується при оформленні замовлення.
              </OrderDescription>
            </OrderStyledRow>
          </SecondPart>
        </ThirdContainer>
        <MobileThirdContainer>
          <Description>
            Придбано понад 2187
            <br /> разів за останні 2 місяці
          </Description>
          <OrderTitle>ОФОРМИТИ ЗАМОВЛЕННЯ:</OrderTitle>
          <Description>
            Збережіть найдорожчі спогади на вічність
            <br /> і поділіться ними зі своїми близькими
          </Description>
          <FifthImg src={mobilefifthimg} />
          <OrderWithoutDiscountPrice>₴2,050.00 UAH</OrderWithoutDiscountPrice>
          <OrderDiscountPrice>₴1,290.00 UAH</OrderDiscountPrice>
          <BuyButtonContainer>
            <Button name="ПРИДБАТИ" />
          </BuyButtonContainer>
          <OrderDescription>
            Знижка -40% на зірку пам'яті до 30.09
          </OrderDescription>
          <OrderDescription>
            Податки включені. Вартість доставки 
            <br /> розраховується при оформленні замовлення.
          </OrderDescription>
        </MobileThirdContainer>
        <FourthContainer>
          <div>
            <StyledTitlev2>Реальні відгуки</StyledTitlev2>
            <StyledRow>
              <Row>
                <StyledTitlev2>клієнтів про</StyledTitlev2>
                <StyledTitlev2 style={{ color: colors.primaryBeige }}>
                  &nbsp;ZIRKA
                </StyledTitlev2>
              </Row>
              <VectorImg src={vector} alt="" />
            </StyledRow>
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
              <Rowv2>
                <StyledTitlev2>клієнтів про</StyledTitlev2>
                <StyledTitlev2 style={{ color: colors.primaryBeige }}>
                  &nbsp;ZIRKA
                </StyledTitlev2>
              </Rowv2>
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
