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

export const StarOfMemoryFirstContainer = styled.div`
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

export const HeaderTitle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 350px;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 80px;

  @media (max-width: 1500px) {
    height: auto;
  }

  @media (max-width: 768px) {
    height: auto;
    margin: 20px 0px 60px 0px;
  }
`

export const Row = styled.div`
  display: flex;

  @media (max-width: 768px) {
    display: none;
  }
`

export const Rowv2 = styled.div`
  display: flex;

  @media (max-width: 768px) {
    
  }
`

export const RowInHeader = styled.div`
  display: flex;

  @media (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }
`

export const HeaderStyledTitle = styled.h2`
  height: 120px;
  font-size: 120px;
  font-weight: 400;
  color: ${colors.primaryBeige};

  @media (max-width: 1500px) {
    width: 100%;
    font-size: 80px;
    height: max-content;
  }

  @media (max-width: 1000px) {
    width: 100%;
    font-size: 50px;
    height: max-content;
  }

  @media (max-width: 768px) {
    width: 100%;
    font-size: 30px;
    height: max-content;
  }
`

export const SecondContainerTitle = styled.h2`
  font-size: 190px;
  text-align: center;
  font-weight: 400;
  color: ${colors.primaryBeige};

  @media (max-width: 1500px) {
    margin-top: 40px;
    font-size: 50px;
    height: max-content;
    text-align: center;
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

  @media (max-width: 1500px) {
    height: 80px;
    width: 235px;
    top: -35px;
  }

  @media (max-width: 768px) {
    height: 72px;
    width: 200px;
    top: -35px;
    left: 30px;
  }
`

export const QRCodeImgContainer = styled.div`
  display: flex;
  align-items: end;
  padding-bottom: 50px;

  @media (max-width: 1400px) {
    display: none;
  }
`

export const QRCodeImg = styled.img`
  width: 260px;
  height: 260px;
`

export const ThirdContainer = styled.div`
  display: flex;
  margin-top: 100px;

  @media (max-width: 1500px) {
    display: none;
  }
`

export const MobileThirdContainer = styled.div`
  display: none;

  @media (max-width: 1500px) {
    display: flex;
    flex-direction: column;
    margin-top: 500px;
  }

  @media (max-width: 768px) {
    margin-top: 200px;
  }
`

export const FirstPart = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`

export const OrderStyledRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  @media (max-width: 1500px) {
    flex-direction: column;
    gap: 10px;
  }
`

export const FifthImg = styled.img`
  width: 520px;
  height: 601px;

  @media (max-width: 1500px) {
    width: 339px;
    height: 222px;
    margin: 40px 0px 20px 0px;
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
  justify-content: space-around;

  @media (max-width: 1500px) {
    flex-direction: column;
    gap: 10px;
  }
`

export const SecondPart = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 50px 50px 0px 100px;
`

export const OrderTitle = styled.h4`
  height: 120px;
  font-size: 84px;
  font-weight: 400;
  color: ${colors.primaryBeige};

  @media (max-width: 1500px) {
    height: auto;
    font-size: 30px;
    margin: 15px 0px;
  }
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

  @media (max-width: 1500px) {
    font-size: 45px;
    margin: 0;
  }
`

export const BuyButtonContainer = styled.div`
  display: flex;
  height: 85px;
  width: 450px;

  @media (max-width: 1500px) {
    width: 330px;
    margin-top: 20px;
  }
`

export const OrderDescription = styled.p`
  font-size: 20px;
  font-weight: 400;
  color: ${colors.secondaryGrey};

  @media (max-width: 1500px) {
    font-size: 14px;
    line-height: 21px;
    margin-top: 20px;
    
  }
`

export const FourthContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;
  margin-top: 150px;
  @media (max-width: 768px) {
    display: none;
  }
`

export const VectorImg = styled.img`
  display: flex;
  width: 20px;
  height: 20px;
`

export const CardsBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, auto);
  width: 100%;
`

export const Card = styled.div`
  padding: 40px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
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
    font-size: 40px;
  }
`

export const FifthContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;
  margin: 150px 0px;

  @media (max-width: 768px) {
    gap: 20px;
    margin: 20px 0px;
  }
`

export const VideosContainer = styled.div`
  display: flex;
  width: 100%;

  @media (max-width: 768px) {
    display: flex;
    gap: 5px;
    overflow-x: auto;
    white-space: nowrap;
    width: 90vw;
  }
`
export const VideoImg = styled.img`
  width: 594px;
  height: 528px;

  @media (max-width: 768px) {
    width: 278px;
    height: 247px;
  }
`
