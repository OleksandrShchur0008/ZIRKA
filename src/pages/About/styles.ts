import styled from "@emotion/styled"
import { colors } from "styles/colors"

export const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const FirstContainer = styled.div`
  display: flex;
  width: 100%;
  min-height: 1000px;
  position: relative;
  gap: 70px;

  @media (max-width: 768px) {
    min-height: max-content;
    position: static;
    gap: 5px;
  }
`

export const PhoneImg = styled.img`
  width: 730px;
  height: 1006px;

  @media (max-width: 768px) {
    width: 182px;
    height: 252px;
    translate: -25px;
  }
`

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 50px;
`

export const StyledTitle = styled.h2`
  height: 100px;
  font-size: 96px;
  font-weight: 400;
  color: ${colors.primaryBlack};
  margin: 70px 0px;

  @media (max-width: 768px) {
    display: none;
  }
`

export const ContentWrapper = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  gap: 50px;

  @media (max-width: 768px) {
    padding-top: 20px;
  }
`

export const FirstContentToChange = styled.div<{ isAlternate: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 50px;
  text-align: justify;
  opacity: ${({ isAlternate }) => (isAlternate ? 0.2 : 1)};
  transform: ${({ isAlternate }) =>
    isAlternate ? "translateX(105%)" : "translateX(0)"};
  transition:
    opacity 0.8s ease,
    transform 0.8s ease;

  @media (max-width: 768px) {
    line-height: 16px;
    font-size: 14px;
    display: ${({ isAlternate }) => (isAlternate ? "none" : "translateX(0)")};
    transform: ${({ isAlternate }) =>
      isAlternate ? "translateX(0)" : "translateX(-20%)"};
  }
`

export const SecondContentToChange = styled.div<{ isAlternate: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 50px;
  text-align: justify;
  opacity: ${({ isAlternate }) => (isAlternate ? 1 : 0.2)};
  transform: ${({ isAlternate }) =>
    isAlternate ? "translateX(-112%)" : "translateX(0%)"};
  transition:
    opacity 0.8s ease,
    transform 0.8s ease;

  @media (max-width: 768px) {
    line-height: 16px;
    font-size: 14px;
    display: ${({ isAlternate }) => (isAlternate ? "translateX(0)" : "none")};
    transform: ${({ isAlternate }) =>
      isAlternate ? "translateX(-20%)" : "translateX(0%)"};
  }
`

export const Title = styled.h5`
  font-size: 48px;
  font-weight: 400;
  color: ${colors.primaryBlack};

  @media (max-width: 768px) {
    line-height: 22px;
    font-size: 20px;
  }
`

export const Description = styled.h5`
  line-height: 32px;
  font-size: 28px;
  font-weight: 400;
  color: ${colors.primaryBlack};

  @media (max-width: 768px) {
    line-height: 16px;
    font-size: 14px;
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: flex-end;
`

export const ArrowButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90px;
  height: 90px;
  border-radius: 50%;
  color: ${colors.primaryBeige};
  font-size: 24px;
  border: 1px solid ${colors.primaryGrey};
  cursor: pointer;

  &:hover {
    background-color: ${colors.primaryGrey};
  }

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
  }
`
export const Arrows = styled.img`
  height: 28px;
  width: 30px;
`

export const QAPartContainer = styled.div`
  margin: 0px 60px;

  @media (max-width: 768px) {
    margin: 0px 20px;
  }
`
