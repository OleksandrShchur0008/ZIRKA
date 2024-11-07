import styled from "@emotion/styled"
import { Link } from "react-router-dom"
import { colors } from "styles/colors"

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 50px 60px;
  gap: 70px;
`

export const FirstContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 1000px;
  position: relative;
  gap: 50px;
`

export const FirstPart = styled.div`
  display: flex;
  justify-content: space-between;
  height: fit-content;
  position: relative;
  width: 100%;
`

export const Row = styled.div`
  display: flex;
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`

export const SecondPart = styled.div`
  display: flex;
  position: absolute;
  top: 160px;
  width: 100%;
  gap: 70px;
`

export const StyledTitle = styled.h2`
  height: 120px;
  font-size: 120px;
  font-weight: 400;
  color: ${colors.primaryBeige};
`

export const FirstImage = styled.img`
  position: relative;
  width: 358px;
  height: 664px;
  border-radius: 10px;

  @media(max-width: 768px) {
    display: none;
  }
`

export const SecondImage = styled.img`
  position: relative;
  width: 358px;
  height: 480px;
  border-radius: 10px;

  @media(max-width: 768px) {
    display: none;
  }
`

export const ThirdImage = styled.img`
  position: relative;
  width: 411px;
  height: 489px;
  border-radius: 10px;

  @media(max-width: 768px) {
    display: none;
  }
`



export const DescriptionButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Description = styled.p`
  line-height: 35px;
  font-size: 20px;
  font-weight: 400;
  color: ${colors.primaryBlack};
`

export const StyledRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
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
`

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;
  height: 100%;
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
`

export const ForthImage = styled.img`
  position: relative;
  width: 1800px;
  height: 788px;
  border-radius: 10px;
`

export const OverlayBox = styled.div`
  position: absolute;
  top: 3080px;
  z-index: 1000;
  width: 47%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin-right: 80px;
  border-radius: 10px;
  backdrop-filter: blur(12px);
  border: 1px solid white;
  color: white;
`

export const BluredQRCodeImg = styled.img`
  width: 90px;
  height: 90px;
  margin-left: 70px;
`
