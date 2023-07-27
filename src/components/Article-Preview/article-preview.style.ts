import styled, { css } from "styled-components";

export const ArticlePreviewWrapper = styled.div<{ isMobile: boolean, isTablet: boolean }>`
background-color: #FFFFFF;
hieght: 242px;
max-width: 988px;
width: 100%;
border-radius: 20px;
border: 1px solid #D9DBE9;
box-shadow: 0px 32px 64px 0px #0000000D;
display: flex;
${({ isMobile, isTablet }) => {
        if (isMobile) {
            return css`
        max-width: 343px;
        flex-direction: column;
        max-height: 449px;
        height: 100%;
        `
        } else if (isTablet) {
            return css`
        max-width: 728px;`
        }
    }}

`

export const ArticleContentWrapper = styled.div<{ isMobile: boolean, isTablet: boolean }>`
display: flex;
flex-direction: column;
flex: 1;
max-width: 743px;
width: 100%;
padding: 16px 16px;

${({ isMobile }) => {
        if (isMobile) {
            return css`
        max-width: 100%;
        max-height: 299px;
        height: 100%;
        padding: 8px 16px;

`
        }
    }}
`

export const ImgWrapper = styled.div<{ isMobile: boolean, isTablet: boolean }>`
flex-shrink: 0;
max-width: 245px;
${({ isMobile }) => {
        if (isMobile) {
            return css`
            max-width: 343px;
            max-height: 150px;
    `
        }
    }}
`

export const StyledImg = styled.img<{ isMobile: boolean }>`
width: 100%;
height: 100%;
object-fit: cover;
${({ isMobile }) => isMobile ? 'border-radius: 20px 20px 0 0' : 'border-radius: 20px 0 0 20px'};


`

export const DateWrapper = styled.div<{ width?: string }>`
width: 100%;
max-width: 100%;
height: 22px;
font-weight: 400;
line-height: 22px;
font-size: 14px;
letter-spacing: 0.25px;
color: #5A5A8980;

`

export const StyledHeading3 = styled.h3 <{ isMobile: boolean, isTablet: boolean }>`
max-width: 470px;
max-height: 42px;
font-weight: 700;
font-size: 18px;
line-height: 21px;
color: #14142B;
margin-bottom: 14px;
margin-top: 14px;

${({ isMobile, isTablet }) => {
        if (isMobile) {
            return css`
        width: 100%;
        max-height: 63px;
        height: 100%;
        white-space: normal;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box !important;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;

`
        } else if (isTablet) {
            return css`
        width: 100%;
        max-height: 42px;
        white-space: normal;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box !important;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
`
        }
    }}

`

export const StyledSourceWrapper = styled.div<{ isMobile: boolean, isTablet: boolean }>`
max-width: 100%;
width: 100%;
height: 22px;
font-size: 14px;
line-height: 22px;
letter-spaceing: 0.25px;
color: #5A5A8980;
margin-bottom: 14px;
${({ isMobile, isTablet }) => {
        if (isMobile) {
            return css`
        margin-bottom: 10px;`
        } else if (isTablet) {
            return css`
        margin-bottom: 19px;`
        }
    }}

`

export const ParagraphWrapper = styled.p<{ width?: string, isMobile: boolean, isTablet: boolean }>`
${({ width }) => `width: ${width}`}px;
max-width: 741px;
width: 100%;
height:32px;
font-size: 14px;
line-height: 16.4px;
color: #5A5A89;
font-weight: 400;
margin-block-start: 0;
margin-block-end: 19px;
white-space: normal;
overflow: hidden;
text-overflow: ellipsis;
display: -webkit-box !important;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;

${({ isMobile, isTablet }) => {
        if (isMobile) {
            return css`
        width: 100%;
        max-height: 96px;
        height: 100%;
        -webkit-line-clamp: 5;
        margin-block-end: 10px;
    `
        } else if (isTablet) {
            return css`
        -webkit-line-clamp: 3;
    `
        }
    }}

`

export const ButtonWrapper = styled.div<{ isMobile: boolean }>`
align-self: flex-end;
display: flex;
justify-content: space-around;
${({ isMobile }) => isMobile ? 'align-self: center' : ''};
${({ isMobile }) => isMobile ? 'height: 36px' : ''};
${({ isMobile }) => isMobile ? 'max-width: 100%' : ''};
${({ isMobile }) => isMobile ? 'margin-top: 0' : 'margin-top: 14px;'};
`


