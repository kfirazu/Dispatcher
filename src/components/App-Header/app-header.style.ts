import styled, { css } from "styled-components";

const StyledContainer = styled.header<{ isMobile: boolean, isTablet: boolean }>`
max-width: 1920px;
width: 100%;
height: 74px;
display: flex;
align-items: center;
background-color: #262146;
padding-right: 20px;
padding-left: 20px;
border: 1px;
box-shadow: 0px 32px 64px 0px #0000000D;

${({ isMobile, isTablet }) => {
        if (isMobile) {
            return css`
    max-width: 375px;
    padding: 12px 16px;
    justify-content: space-between;

`
        } else if (isTablet) {
            return css`
    max-width: 768px;
`
        }
    }}

`

export const LogoWrapper = styled.div<{ isMobile: boolean, isTablet: boolean }>`
flex: 1;
max-width: 11.6%;
width: 100%;

${({ isMobile, isTablet }) => {
        if (isMobile) {
            return css`
        max-width: 50%;

`
        } else if (isTablet) {
            return css`
        // max-width: 728px;
`
        }
    }}

`

export default StyledContainer

export const StyledInputWrapper = styled.div`
display: flex;
position: relative;
flex: 1
`


export const IconsWrapper = styled.div<{ isMobile: boolean, isTablet: boolean }>`
gap: 12px;
align-items: center;
display: none;

${({ isMobile, isTablet }) => {
        if (isMobile) {
            return css`
            max-width: 143px;
            display: flex;

`
        } else if (isTablet) {
            return css`
            max-width: 122px;
            height: 50px;
            display: flex;
            `
        }
    }}
`

export const StyledIcon = styled.img`
width: 24px;
height: 24px;
cursor: pointer;
`


export const StyledUserAvatarWrapper = styled.div<{ isMobile: boolean, isTablet: boolean }>`
background-color: #0058B9;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
${({ isMobile, isTablet }) => {
        if (isMobile) {
            return css`
        width: 35px;
        height: 35px;
`
        } else if (isTablet) {
            return css`
        width: 50px;
        height: 50px
        `
        }
    }}

`

export const StyledUserName = styled.span`
font-size: 14px;
color: #FFFFFF;
text-align: center;
font-family: Roboto Mono Medium for Powerline;

`

export const StyledInputContainer = styled.div`
width: 85%;
 display: flex;
justify-content: space-between;
`