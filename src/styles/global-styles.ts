import styled, { css } from "styled-components"

export const AppContainer = styled.div<{ isMobile: boolean, isTablet: boolean }>`
display: flex;
flex-direction: column;
min-height: 100vh;
min-width: 100vw;
background-color: #F3F3FF;

// /* .scrollbar-width: thin;
// .scrollbar-color: #a0a3bd transparent;
// For Firefox */

// /* Styling for webkit-based browsers (Chrome, Safari) */
// /* Scrollbar container */
// ::-webkit-scrollbar {
//   width: 10px;
//   height: 150px;
// }

// /* Scrollbar thumb (the draggable handle) */
// ::-webkit-scrollbar-thumb {
//   background-color: #a0a3bd;
//   border-radius: 10px;
//   background-clip: padding-box;
//   padding: 20px;
// }

// /* Scrollbar track (the area behind the thumb) */
// /* Affects the track underneath/above the thumb */
// ::-webkit-scrollbar-track {
//   background-color: transparent;
//   /* Hide the scrollbar track */
//   border-radius: 10px;
// }

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
padding:0 1.25rem;
display: flex;
flex-direction: column;
align-items: center;


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

  `
        }
    }}

`

export const ContentWrapper = styled.div<{ isMobile: boolean }>`
height: 100%;

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
border-top: 1px solid #D9DBE9;
display: flex;
margin-top: 20px;
height: 100%;
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




