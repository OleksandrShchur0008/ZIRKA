import styled from "@emotion/styled"
import { colors } from "styles/colors"

export const StarOfMemoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const StarOfMemoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 60px;
  gap: 20px;

  @media (max-width: 768px) {
    margin: 0px 20px;
  }
`

export const HeaderTitle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 350px;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 80px;

  @media (max-width: 768px) {
    display: none;
  }
`
export const Row = styled.div`
  display: flex;

  @media (max-width: 768px) {
    display: none;
  }
`

export const ButtonImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`

export const ButtonOnImgContainer = styled.div`
  display: flex;
  height: 95px;
  width: 335px;
  position: absolute;
  z-index: 1;
  top: -50px;

  @media (max-width: 768px) {
    height: 72px;
    width: 200px;
  }
`

export const QRCodeImgContainer = styled.div`
  display: flex;
  align-items: end;
`

export const QRCodeImg = styled.img`
  width: 260px;
  height: 260px;
`

export const ThirdContainer = styled.div`
  display: flex;
  margin-top: 100px;
`

export const FirstPart = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`

export const FifthImg = styled.img`
  width: 520px;
  height: 601px;

  @media (max-width: 768px) {
    width: 339px;
    height: 467px;
  }
`

export const StarText = styled.h6`
  font-size: 25px;
  font-weight: 700;
  color: ${colors.primaryBeige};
`

export const StyledRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`

export const SecondPart = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 70px 50px 0px 100px;
`

export const OrderTitle = styled.h4`
  font-size: 84px;
  font-weight: 400;
  color: ${colors.primaryBeige};
`

export const OrderWithoutDiscountPrice = styled.h6`
  text-decoration: line-through;
  font-size: 25px;
  font-weight: 700;
  color: ${colors.secondaryGrey};
  margin-bottom: 20px;
`

export const OrderDiscountPrice = styled.h6`
  font-size: 85px;
  font-weight: 700;
  color: ${colors.primaryBeige};
  margin-bottom: 60px;
`

export const BuyButtonContainer = styled.div`
  display: flex;
  height: 85px;
  width: 450px;

  @media (max-width: 768px) {
    width: 200px;
  }
`

export const OrderDescription = styled.p`
  font-size: 20px;
  font-weight: 400;
  color: ${colors.secondaryGrey};
`

export const FourthContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;
  margin: 150px 0px;
  @media (max-width: 768px) {
    display: none;
  }
`

export const CardsBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, auto);
  width: 100%;
`

export const Card = styled.div`
  padding: 40px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  height: auto;
  display: flex;
  justify-content: flex-start;
  gap: 20px;
`

export const AvatarImg = styled.img`
  width: 100px;
  height: 100px;
`

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const Name = styled.p`
  font-size: 20px;
  font-weight: 400;
  color: ${colors.primaryBlack};
  padding-top: 20px;
`

export const Source = styled.p`
  font-size: 16px;
  font-weight: 400;
  margin: 20px 0px;
  color: ${colors.primaryGrey};
`

export const Comments = styled.p`
  font-size: 20px;
  font-weight: 400;
  color: ${colors.primaryBlack};
`

export const StyledTitlev2 = styled.h2`
  font-size: 96px;
  font-weight: 400;
  color: ${colors.primaryBlack};

  @media (max-width: 768px) {
  }
`

export const FifthContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;
  margin: 150px 0px;
  @media (max-width: 768px) {
    display: none;
  }
`

export const VideosContainer = styled.div`
  display: flex;
  width: 100%;
`
export const VideoImg = styled.img`
  width: 594px;
  height: 528px;
`
