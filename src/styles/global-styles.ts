import styled from "styled-components"

export const AppContainer = styled.div`
display: flex;
flex-direction: column;
min-height: 100vh;
min-width: 100vw;
background-color: #F3F3FF;
`
export const MainContainer = styled.main`
// flex: 1;
display: flex;
// background-color: #F3F3FF;
height: calc(100vh - 74px);
width: 100%;
padding: 20px;
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
