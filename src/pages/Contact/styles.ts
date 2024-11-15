import styled from "@emotion/styled"
import { colors } from "styles/colors"

export const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const ContactContainerBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 800px;
  background-color: ${colors.primaryBeige};

  @media (max-width: 768px) {
    height: 900px;
  }
`

export const ContactContainer = styled.div`
  display: flex;
  width: 95%;
  height: 90%;
  background-color: white;
  border-radius: 26px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
  }

  @media (max-width: 768px) {
    width: 90%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0px 140px;
  gap: 30px;
  width: 100%;
  height: 100%;

  @media (max-width: 768px) {
    gap: 20px;
    margin: 0px;
    padding-left: 30px;
  }
`

export const PreTitle = styled.h5`
  line-height: 20px;
  font-size: 20px;
  font-weight: 400;
  color: ${colors.primaryGrey};

  @media (max-width: 768px) {
    line-height: 14px;
    font-size: 14px;
  }
`

export const ContactTitle = styled.h5`
  line-height: 64px;
  font-size: 64px;
  font-weight: 400;
  color: ${colors.primaryBlack};

  @media (max-width: 768px) {
    line-height: 30px;
    font-size: 30px;
  }
`

export const ContactDescription = styled.h5`
  line-height: 28px;
  font-size: 24px;
  font-weight: 400;
  color: ${colors.primaryBlack};

  @media (max-width: 768px) {
    line-height: 16px;
    font-size: 14px;
  }
`

export const ContactDescriptionSecondPart = styled.h5`
  line-height: 28px;
  font-size: 24px;
  font-weight: 400;
  color: ${colors.primaryBlack};
  margin: 70px 0px;

  @media (max-width: 768px) {
    line-height: 16px;
    font-size: 14px;
    margin: 0;
  }
`

export const QuestionFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 150px;
  gap: 40px;
  width: 100%;
  height: 100%;

  @media (max-width: 768px) {
    margin: 0px;
    align-items: center;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  margin: 20px 0px;
  height: 85px;
  width: 400px;

  @media (max-width: 768px) {
    width: 260px;
  }
`
