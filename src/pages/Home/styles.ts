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
    margin: 0px 20px;
  }
`

export const HomeFirstContainer = styled.div`
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

export const HomeFirstPart = styled.div`
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

export const HomeRow = styled.div`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`

export const HomeColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
  }
`

export const HomeSecondPart = styled.div`
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

export const MainButtonContainer = styled.div`
  display: flex;
  height: 72px;
  width: 200px;

  @media (max-width: 1500px) {
    display: none;
  }
`

export const MobileImagesContainer = styled.div`
  display: none;

  @media (max-width: 1500px) {
    display: flex;
    gap: 5px;
    overflow-x: auto;
    white-space: nowrap;
    padding-top: 20px;
    width: 100vw;
  }
`

export const MobileMainButtonContainer = styled.div`
  display: none;

  @media (max-width: 1500px) {
    display: flex;
    height: 72px;
    width: 200px;
    margin: 20px 0px;
  }
`

export const StyledTitle = styled.h2`
  height: 120px;
  font-size: 120px;
  font-weight: 400;
  color: ${colors.primaryBeige};

  @media (max-width: 1500px) {
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

  @media (max-width: 1500px) {
    display: none;
  }
`

export const SecondImage = styled.img`
  position: relative;
  width: 358px;
  height: 480px;
  border-radius: 10px;

  @media (max-width: 1500px) {
    display: none;
  }
`

export const ThirdImage = styled.img`
  position: relative;
  width: 411px;
  height: 489px;
  border-radius: 10px;

  @media (max-width: 1500px) {
    display: none;
  }
`

export const MobileSharedStyleImage = styled.img`
  display: none;

  @media (max-width: 1500px) {
    display: flex;
    border-radius: 10px;
    width: 205px;
    height: 275px;
    flex-shrink: 0;
  }
`

export const FirstDescriptionButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 768px) {
    align-items: center;
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

export const SecondContainerTitle = styled.p`
  line-height: 31px;
  font-size: 20px;
  font-weight: 400;
  color: ${colors.primaryBlack};
`

export const HomeStyledRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  @media (max-width: 768px) {
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
`

export const SecondDescriptionButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 20%;

  @media (max-width: 1400px) {
    width: 60%;
    gap: 20px;
    margin-bottom: 50px;
  }

  @media (max-width: 768px) {
    width: 100%;
    gap: 20px;
    margin-bottom: 50px;
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

  @media (max-width: 1400px) {
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
    width: 100%;
  }
`

export const CardRow = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr;
  align-items: center;
  width: 100%;
  max-width: 100%;
  margin: 24px 0px;

  @media (max-width: 1400px) {
    display: flex;
    align-items: end;
  }
`

export const MobileDescriptionColumn = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr;
  @media (max-width: 1400px) {
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding-left: 70px;
  }
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
    gap: 0px;
  }
`

export const DescriptionContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 20px;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const ForthImage = styled.img`
  position: relative;
  width: 1800px;
  height: 788px;
  border-radius: 10px;

  @media (max-width: 1500px) {
    display: none;
  }
`

export const MobileForthImage = styled.img`
  display: none;

  @media (max-width: 1500px) {
    display: flex;
    position: relative;
    width: 639px;
    height: 951px;
    border-radius: 10px;
  }

  @media (max-width: 1100px) {
    display: flex;
    position: relative;
    width: 339px;
    height: 551px;
    border-radius: 10px;
  }
`

export const FourthContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;

  @media (max-width: 1500px) {
    justify-content: center;
    align-items: flex-end;
  }
`

export const OverlayBox = styled.div`
  position: absolute;
  z-index: 1000;
  width: 920px;
  height: 470px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 80px;
  border-radius: 10px;
  backdrop-filter: blur(30px);
  border: 1px solid white;
  gap: 30px;

  @media (max-width: 1500px) {
    width: 500px;
    height: 390px;
    margin: 0px;
    margin-bottom: 20px;
    gap: 10px;
  }

  @media (max-width: 1100px) {
    width: 300px;
    height: 290px;
    margin: 0px;
    margin-bottom: 20px;
    gap: 10px;
  }
`

export const OverlayTitle = styled.h2`
  font-size: 84px;
  font-weight: 400;
  color: white;

  @media (max-width: 1500px) {
    font-size: 50px;
  }

  @media (max-width: 1100px) {
    font-size: 30px;
  }
`

export const OverlayDescription = styled.p`
  line-height: 31px;
  font-size: 20px;
  font-weight: 400;
  color: white;
  width: 55%;

  @media (max-width: 1500px) {
    line-height: 21px;
    font-size: 18px;
    text-align: center;
  }

  @media (max-width: 1100px) {
    line-height: 21px;
    font-size: 14px;
    width: 70%;
    text-align: center;
  }
`

export const BluredQRCodeImg = styled.img`
  width: 90px;
  height: 90px;
  margin-left: 70px;

  @media (max-width: 1500px) {
    display: none;
  }
`

export const MobileBluredQRCodeImg = styled.img`
  display: none;

  @media (max-width: 1500px) {
    display: flex;
    width: 60px;
    height: 60px;
  }

  @media (max-width: 1100px) {
    display: flex;
    width: 38px;
    height: 38px;
  }
`
