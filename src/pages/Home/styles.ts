import styled from "@emotion/styled"
import { Link } from "react-router-dom"
import { colors } from "styles/colors"

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 60px;
  gap: 50px;

  @media (max-width: 768px) {
    margin: 30px 12px;
  }
`

export const FirstContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 1000px;
  position: relative;
  gap: 50px;

  @media (max-width: 768px) {
    min-height: max-content;
    position: static;
    gap: 0;
  }
`

export const FirstPart = styled.div`
  display: flex;
  justify-content: space-between;
  height: fit-content;
  position: relative;
  width: 100%;

  @media (max-width: 768px) {
    position: static;
    justify-content: center;
  }
`

export const Row = styled.div`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 768px) {
    justify-content: center;
  }
`

export const SecondPart = styled.div`
  display: flex;
  position: absolute;
  top: 160px;
  width: 100%;
  gap: 70px;

  @media (max-width: 768px) {
    position: static;
    justify-content: center;
  }
`

export const StyledTitle = styled.h2`
  height: 120px;
  font-size: 120px;
  font-weight: 400;
  color: ${colors.primaryBeige};

  @media (max-width: 768px) {
    font-size: 50px;
    height: max-content;
    text-align: center;
  }
`

export const FirstImage = styled.img`
  position: relative;
  width: 358px;
  height: 664px;
  border-radius: 10px;

  @media (max-width: 768px) {
    display: none;
    width: 205px;
    height: 275px;
  }
`

export const SecondImage = styled.img`
  position: relative;
  width: 358px;
  height: 480px;
  border-radius: 10px;

  @media (max-width: 768px) {
    display: none;
    width: 205px;
    height: 275px;
  }
`

export const ThirdImage = styled.img`
  position: relative;
  width: 411px;
  height: 489px;
  border-radius: 10px;

  @media (max-width: 768px) {
    display: none;
    width: 205px;
    height: 275px;
  }
`

export const DescriptionButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`

export const Description = styled.p`
  line-height: 31px;
  font-size: 20px;
  font-weight: 400;
  color: ${colors.primaryBlack};

  @media (max-width: 768px) {
    line-height: 21px;
    font-size: 14px;
  }
`

export const StyledRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  @media (max-width: 768px) {
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
`

export const ScrollDownLink = styled(Link)<{ isActive: boolean }>`
  display: flex;
  justify-content: end;
  align-items: end;
  text-decoration: none;
  font-size: 16px;
  transition: transform 1s ease;
  color: ${({ isActive }) =>
    isActive ? colors.primaryBeige : colors.primaryBlack};

  &:hover {
    color: ${colors.primaryBeige};
    border-bottom: 2px solid ${colors.primaryBeige};
  }

  @media (max-width: 768px) {
    margin-right: 60px;
  }
`

export const ArrowImg = styled.img`
  width: 20px;
  height: 15px;
  margin-right: 10px;
`

export const SecondContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 650px;

  @media (max-width: 768px) {
    position: static;
    flex-direction: column;
    height: auto;
  }
`

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;
  height: 100%;

  @media (max-width: 768px) {
  }
`

export const CardRow = styled.div`
  display: grid;
  grid-template-columns: 400px 2fr 3fr;
  align-items: center;
  width: 100%;
  margin: 24px 0px;
`

export const CardHeader = styled.p`
  line-height: 35px;
  font-size: 20px;
  font-weight: 700;
  color: ${colors.primaryBlack};

  @media (max-width: 768px) {
    line-height: 21px;
    font-size: 14px;
  }
`

export const Line = styled.div`
  width: 100%;
  min-height: 1px;
  background-color: ${colors.secondaryBlack};
`

export const ThirdContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 50px 0px;
  gap: 250px;

  @media (max-width: 768px) {
    position: static;
  }
`

export const ForthImage = styled.img`
  position: relative;
  width: 1800px;
  height: 788px;
  border-radius: 10px;

  @media (max-width: 768px) {
    width: 339px;
    height: 551px;
  }
`

export const OverlayBox = styled.div`
  position: absolute;
  top: 2940px;
  z-index: 1000;
  width: 47%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin-right: 80px;
  border-radius: 10px;
  backdrop-filter: blur(30px);
  border: 1px solid white;
  color: white;
`

export const BluredQRCodeImg = styled.img`
  width: 90px;
  height: 90px;
  margin-left: 70px;
`
