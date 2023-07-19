import styled, { css } from "styled-components";

const StyledContainer = styled.div<{ isMobile: boolean, isTablet: boolean }>`
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

`
    } else if (isTablet) {
        return css`
// max-width: 728px;
`
    }
}}

`

export const LogoWrapper = styled.div`
flex: 1;
// margin-right: 153px;


`

export default StyledContainer

export const StyledInputWrapper = styled.div`
display: flex;
position: relative;
flex: 1
`


export const IconsWrapper = styled.div`
display: flex;
gap: 12px;
align-items: center;
// flex: end;
`

export const StyledIcon = styled.img`
width: 24px;
height: 24px;
cursor: pointer;
`


export const StyledUserAvatarWrapper = styled.div`
background-color: #0058B9;
border-radius: 50%;
width: 35px;
height: 35px;
display: flex;
align-items: center;
justify-content: center;

`

export const StyledUserName = styled.span`
font-size: 14px;
color: #FFFFFF;
text-align: center;
font-family: Roboto Mono Medium for Powerline;

`