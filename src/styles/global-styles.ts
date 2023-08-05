import styled, { css } from "styled-components"

export const AppContainer = styled.div<{ isMobile: boolean, isTablet: boolean }>`
display: flex;
flex-direction: column;
min-height: 100vh;
min-width: 100vw;
background-color: #F3F3FF;

${({ isMobile, isTablet }) => {
        if (isMobile) {
            return css`
            // overflow-y: auto;
`
        } else if (isTablet) {
            return css`


`
        }
    }}

`
export const MainContainer = styled.main<{ isMobile: boolean, isTablet: boolean }>`
height: calc(100vh - 74px);
width: 100%;
padding:0 8.3rem;
// padding:0 1.25rem;

display: flex;
flex-direction: column;
// align-content: center;
align-self: center;
// overflow-x: hidden; // i didnt have before.

${({ isMobile, isTablet }) => {
        if (isMobile) {
            return css`
        padding: 0;
        margin-top: 0;
        // height: calc(100vh - 74px);
        height: 100vh;
        // overflow-y: hidden;

    `
        } else if (isTablet) {
            return css`
    padding: 0;
    margin-top: 0;
    overflow-x: hidden;

  `
        }
    }}

`

export const ContentWrapper = styled.div<{ isMobile: boolean }>`
height: 100%;
width: 100%

${({ isMobile }) => {
        if (isMobile) {
            return css`
    display: flex;
    flex-direction: column;
    align-items:center;



`
        }
    }}

`

export const StyledContentContainer = styled.div`
display: flex;
margin-top: 13px;
height: 100%;
justify-content: center;
`

export const StyledTransparentScreen = styled.div`
position: fixed; 
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: transparent;
z-index: 10;
`

export const StyledMobileBlackScreen = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: #303032;
opacity: 0.7;
z-index: 10;
cursor: pointer;
`




