import styled from "styled-components"

export const AppContainer = styled.div`
display: flex;
flex-direction: column;
min-height: 100vh;
min-width: 100vw;
background-color: #F3F3FF;
`
export const MainContainer = styled.main<{ isMobile: boolean }>`
// display: flex;
height: calc(100vh - 74px);
width: 100%;
${({ isMobile }) => isMobile ? 'padding: 0' : 'padding: 20px'};
margin-top: 20px;

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
