import styled from "styled-components";


export const ArticlePreviewWrapper = styled.div`
background-color: #FFFFFF;
hieght: 242px;
max-width: 988px;
widht: 100%;
border-radius: 20px;
border: 1px solid #D9DBE9;
box-shadow: 0px 32px 64px 0px #0000000D;
display: flex;


`

export const ArticleContentWrapper = styled.div`
display: flex;
flex-direction: column;
flex: 1;
max-width: 743px;
width: 100%;
padding: 8px 16px;
box-sizing: border-box;
`

export const ImgWrapper = styled.div`
flex-shrink: 0;
max-width: 245px;
`

export const DateWrapper = styled.div<{ width?: string; }>`
${({ width = 137 }) => `width: ${width}`}px;
max-width: 200px;
height: 22px;
font-weight: 400;
line-height: 22px;
font-size: 14px;
letter-spaceing: 0.25px;
color: #5A5A8980;
`

export const StyledHeading3 = styled.h3`
width: 470px;
height: 42px;
font-weight: 700;
font-size: 18px;
line-height: 21px;
color: #14142B;
margin-bottom: 14px;
margin-top: 14px;

`

export const StyledSourceWrapper = styled.div<{ width?: string; }>`
${({ width = 270 }) => `width: ${width}`}px;
height: 22px;
font-size: 14px;
line-height: 22px;
letter-spaceing: 0.25px;
color: #5A5A8980;
margin-bottom: 14px;
`

export const ParagraphWrapper = styled.p<{ width?: string; }>`
${({ width }) => `width: ${width}`}px;
max-width: 741px;
height:32px;
font-size: 14px;
line-height: 16.4px;
color: #5A5A89;
font-weight: 400;

`

export const ButtonWrapper = styled.div`
align-self: flex-end;
margin-top: 14px;
display: flex;
justify-content: space-around;
`

export const StyledImg = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
border-radius: 20px 0 0 20px;

`
