import { Button } from "components"
import {
  Answer,
  Arrow2Img,
  QAPartContainer,
  QAPartTitle,
  QAPartWrapper,
  QARow,
  Question,
  Row,
  Title,
  TitleButtonContainer,
} from "./styles"
import { useNavigate } from "react-router-dom"
import { arrow2 } from "assets"
import { Line } from "pages/Home/styles"

export default function QAPart() {
  const navigate = useNavigate()
  return (
    <QAPartWrapper>
      <TitleButtonContainer>
        <Title>Часті питання</Title>
        <Row>
          <Button onClick={() => navigate("/starofmemory")} />
          <Arrow2Img src={arrow2} alt="" />
        </Row>
      </TitleButtonContainer>
      <QAPartContainer>
        <QARow style={{ margin: "0px" }}>
          <QAPartTitle>Питання</QAPartTitle>
          <QAPartTitle>Відповідь</QAPartTitle>
        </QARow>
        <QARow>
          <Question>Які є розміри?</Question>
          <Answer>Кожна зірка пам'яті 5 х 5 см.</Answer>
        </QARow>
        <Line />
        <QARow>
          <Question>Що включено в замовлення?</Question>
          <Answer>
            Кожне замовлення містить унікальну,
            <br /> захищену від атмосферних впливів зірку з<br /> високоякісного
            анодованого алюмінію, а<br /> також супровідну пам'ятну сторінку.
          </Answer>
        </QARow>
        <Line />
        <QARow>
          <Question>
            Чи є якісь постійні збори за
            <br /> обслуговування зірки пам'яті?
          </Question>
          <Answer>
            Ні, це одноразовий платіж за довічне
            <br /> обслуговування без будь-яких додаткових
            <br /> витрат.
          </Answer>
        </QARow>
        <Line />
        <QARow>
          <Question>
            Хто завгодно може переглянути
            <br /> сторінку пам'яті?
          </Question>
          <Answer>
            Ви можете самостійно вирішити, чи буде
            <br /> ваш профіль публічним або приватним.
            <br /> Якщо ваш профіль публічний, будь-хто
            <br /> може переглянути його. Якщо ваш профіль
            <br /> приватний, людина повинна спочатку
            <br /> отримати від вас логін та пароль, щоб
            <br /> переглянути профіль.
          </Answer>
        </QARow>
        <Line />
        <QARow>
          <Question>
            Чи може хтось інший в родині також
            <br /> редагувати сторінку пам'яті?
          </Question>
          <Answer>
            Так, ви можете дати логін і пароль іншим
            <br /> людям і в них буде можливість редагувати
            <br /> сторінку пам'яті.
          </Answer>
        </QARow>
        <Line />
        <QARow>
          <Question>
            Чи існує постійна плата за послугу
            <br /> «Зірки пам'яті»?
          </Question>
          <Answer>
            Ні, це одноразовий платіж за довічне
            <br /> обслуговування без додаткових витрат.
          </Answer>
        </QARow>
        <Line />
        <QARow>
          <Question>
            Чи витримує зірка пам'ятi
            <br /> сніг, дощ і холод?
          </Question>
          <Answer>
            Так, важливо, щоб зірка пам'яті була
            <br /> приклеєна на надгробок, коли він висохне,
            <br /> тоді вона без проблем витримає
            <br /> вищезгадані погодні умови.
          </Answer>
        </QARow>
        <Line />
        <QARow>
          <Question>
            Як встановлюється зірка
            <br /> пам'яті на надгробку?
          </Question>
          <Answer>
            На зворотному боці зірки пам'яті є клейка
            <br /> плівка, тому зірка пам'яті приклеюється до
            <br /> надгробка, як наклейка. Важливо
            <br /> переконатися, що поверхня надгробка суха.
            <br /> Для того, щоб зірки пам'яті могли
            <br /> витримати будь-які погодні умови, ми
            <br /> використовуємо запатентовану клейку
            <br />
            плівку від 3М на зворотному боці.
          </Answer>
        </QARow>
        <Line />
      </QAPartContainer>
    </QAPartWrapper>
  )
}
