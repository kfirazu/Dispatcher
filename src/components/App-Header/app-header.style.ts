import styled from "styled-components";

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

`

export const LogoWrapper = styled.div`
flex: 0;
margin-right: 153px;


`

export default StyledContainer

export const StyledInputWrapper = styled.div`
display: flex;
position: relative;
flex: 1
`