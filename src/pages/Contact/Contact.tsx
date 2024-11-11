import { Button, Footer, Header, Input } from "components"
import {
  ButtonContainer,
  ContactContainer,
  ContactContainerBackground,
  ContactWrapper,
  Description,
  DescriptionContainer,
  DescriptionSecondPart,
  PreTitle,
  QuestionFormContainer,
  Title,
} from "./styles"

export default function Contact() {
  return (
    <ContactWrapper>
      <Header />
      <ContactContainerBackground>
        <ContactContainer>
          <DescriptionContainer>
            <PreTitle>ЗАЛИШАЙ ЗАЯВКУ</PreTitle>
            <Title>
              У вас є <br /> запитання?
            </Title>
            <Description>
              Ми тут, щоб допомогти! Просто
              <br /> заповніть контактну форму
              <br /> нижче, і ми зв'яжемося з вами
              <br /> якомога швидше.
            </Description>
            <DescriptionSecondPart>
              Або зателефонуйте за номером:
              <br /> +380965175595
            </DescriptionSecondPart>
          </DescriptionContainer>
          <QuestionFormContainer>
            <Input placeholder="Ім'я" />
            <Input type="email" placeholder="Email" />
            <Input type="tel" placeholder="Номер телефону" />
            <Input placeholder="Коментар" />
            <ButtonContainer>
              <Button
                name="Відправити"
                type="submit"
                onClick={() => {}}
                style={{
                  borderRadius: "26px",
                }}
              />
            </ButtonContainer>
          </QuestionFormContainer>
        </ContactContainer>
      </ContactContainerBackground>
      <Footer />
    </ContactWrapper>
  )
}
