import { Skeleton } from '@mui/material';
import styled from 'styled-components';


export const sx = { bgcolor: '#d9dbe9' };
export const feedListTitleSx = { bgcolor: '#d9dbe9', fontSize: '2rem' , marginLeft: '5px'}

export const SkeletonCardImage = styled(Skeleton)`
  border-radius: 1.25rem 0 0 1.25rem;


`
//   @media only screen and (max-width: ${SCREENS.breakpoint700}px) {
//     border-radius: 1.25rem 1.25rem 0 0;
//   }

export const SkeletonSecondaryCardContainer = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`

export const SkeletonPieContainer = styled.div`
  min-width: 9rem;
  min-height: 9rem;
  margin-top: 8%;
`

export const SkeletonDoughnutOuter = styled(Skeleton)`
  position: relative;
`

export const SkeletonDoughnutInner = styled.div`
  width: 75%;
  height: 75%;
  background: #FFFFFF;
  border-radius: 50%;
  position: relative;
  top: -82.5%;
  left: 7.5%;
`

export const StyledSkeletonAreaChart = styled(Skeleton)`
  margin-top: 20%;
  margin-bottom: 5%;
`

//Feed list

export const CardPrimaryStyled = styled.div`
  flex-direction: row;
  width: 100%;
  min-height: max(12.6vw, 15.125rem);
  margin-bottom: 1.5rem;
  box-shadow: 0px 32px 64px rgba(0, 0, 0, 0.05);
  border-radius: 1.25rem;
  background-color: #FFFFFF;
  border: 1px solid #d9dbe9;

  @media only screen and (max-width: 700px) {
    flex-direction: column;
    height: 28.06rem;
    display: flex;

  }


`

export const CardImgContainer = styled.div`
  flex: 3;
  max-width: 18rem;
  min-height: 100%;
  @media only screen and (max-width: 1900px) {
    max-width: 15.125rem;
  }

  @media only screen and (max-width: 700px) {
    max-width: 100%;
    min-height: 40%;
  }
  @media only screen and (max-width: 500px) {
    max-width: 100%;
    min-height: 33%;
  }
`

export const Article = styled.div`
  flex: 3;
  min-height: 100%;
  width: 52vw;
  align-items: space-between;
  justify-content: space-between;
  padding: 1rem;

  @media only screen and (max-width: 768px) {
    padding-block: 0.59rem;
    min-height: 60%;
    width: 700px;

  }
  @media only screen and (max-width: 375px) {
    padding-block: 0.59rem 1rem;
    min-height: 66%;
    width: 280px;

  }
`
