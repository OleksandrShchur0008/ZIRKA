import styled from "@emotion/styled"
import { Link } from "react-router-dom"
import { colors } from "styles/colors"

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
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
  z-index: 1000;
  width: 100%;
`

export const Row = styled.div`
  display: flex;
  height: 120px;
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
  width: 358px;
  height: 664px;
  border-radius: 10px;
`

export const SecondImage = styled.img`
  width: 358px;
  height: 480px;
  border-radius: 10px;
`

export const ThirdImage = styled.img`
  width: 411px;
  height: 489px;
  border-radius: 10px;
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

export const SecondContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 623px;
  gap: 200px;
`

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 70%;
  min-width: 30%;
`

export const TitleForDescription = styled.p`
  line-height: 35px;
  font-size: 20px;
  font-weight: 700;
  color: ${colors.primaryBlack};
`

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0px;
  width: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
`
