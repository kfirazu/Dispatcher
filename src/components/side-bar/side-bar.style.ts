import styled, { keyframes } from "styled-components";



const easeIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

export const StyledSideBarContainer = styled.aside`
  max-width: 299px;
  width: 100%;
  height: 100vh;
  background-color: #FFFFFF;
  display: flex;
  flex-direction: column;
  position: fixed;
  right: 0;
  z-index: 20;
  animation: ${easeIn} 1.3s ease-in-out;
`;

export const SideBarTitle = styled.div`
width: 100%;
height: 4.625rem;
display:flex;
align-items: center;
border-bottom: 1px solid #D9DBE9;
padding-left: 1rem;
`

export const StyledHeading = styled.h3`
font-size: 1rem;
color: #5A5A89;
font-weight: 500;


`

export const StyledFilterList = styled.ul`
list-style: none;
display: flex;
flex-direction: column;
background-color: #FFFFFF;
padding-inline-start: 0;
margin-block-start: 0;
margin-block-end: 0;
`

export const StyledFilterItem = styled.li`
display: flex;
align-items: center;
justify-content: space-between;
height: 46px;
padding-right: 1rem;
padding-left: 1rem;
color: #5A5A89;
cursor: pointer;
border-bottom: 1px solid #D9DBE9;
font-size: 0.875rem;

`
export const StyledValueWrapper = styled.span`
color: #5A5A8980;
font-size: 0.875rem;

`

export const StyledButtonContainer = styled.div`
width: 100%;
height: 5.375rem;
display:flex;
align-items: center;
justify-content: center;
background-color: #F8F8FF;
margin-top: auto;
`

export const StyledButton = styled.button`
max-width: 157px;
width: 100%;
height: 46px;
border-radius: 20px;
background-color: #0058B9;
color: #FFFFFF;
border: none;
cursor:pointer;
`