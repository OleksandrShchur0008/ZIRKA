import styled from "@emotion/styled"
import { colors } from "styles/colors"

export const QAPartWrapper = styled.div`
  display: flex;
  width: 100%;
  margin: 100px 0px;
  gap: 200px;
`

export const TitleButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 35%;
  height: 700px;
  justify-content: space-between;
`

export const Title = styled.h5`
  line-height: 80px;
  font-size: 105px;
  font-weight: 400;
  color: ${colors.primaryBlack};
`

export const Row = styled.div`
  display: flex;
  gap: 30px;
`

export const Arrow2Img = styled.img`
  width: 56px;
  height: 56px;
`

export const QAPartContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const QARow = styled.div`
  display: grid;
  grid-template-columns: 3fr 2.5fr;
  gap: 20px;
  width: 100%;
  padding: 40px 0;
`

export const QAPartTitle = styled.h6`
  font-size: 20px;
  font-weight: 400;
  color: ${colors.primaryGrey};
`

export const Question = styled.p`
  line-height: 38px;
  font-size: 25px;
  font-weight: 700;
  color: ${colors.primaryBeige};
`

export const Answer = styled.p`
  line-height: 31px;
  font-size: 20px;
  font-weight: 400;
  color: ${colors.primaryBlack};
`
