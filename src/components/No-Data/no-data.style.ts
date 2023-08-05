import styled from "styled-components";
import { NoDataProps } from "./new-no-data";


export const StyledWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100%;
width: 100%;
`
export const NoDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: fit-content;
  margin-top: ${({ type }: NoDataProps) => type === 'search' && '20vh'};

  @media only screen and (max-width: 1200px) {
    margin-top: 3rem;
  }
  @media only screen and (max-width: 375px) {
    margin-top: 6rem;
  }
`
export const NoDataImageDiv = styled.div`
  height: 6.93vw;
  width: 6.93vw;
  @media only screen and (max-width: 1200px) {
    height: 32%;
    width: 32%;
  }
`;

export const NoDataImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const NoDataText = styled.p`
  font-size: 1.125rem;
  color: #5a5a89;
  margin-top: 1rem;
  text-align: center;
`;


export const StyledContentWrapper = styled.div`
display: flex;
flex-direction: column;
justify-conent: center;
align-items: center;
max-width: 470px;
width: 100%;
gap: 16px;
align-self:center;
justify-self: center;


`

export const StyledImage = styled.img`
max-height: 133px;
max-width: 133px;
width: 100%
object-fit: cover;
`

export const StyledHeading5 = styled.h5`
font-size: 18px;
color: #5A5A89;
width: 100%;
text-align: center;
font-weight: 400;
margin: 0;
`

export const DashboardImageWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100%;
width: 100%;
gap: 16px;
flex: 1;

`