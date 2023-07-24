import styled, { css } from "styled-components";


export const StyledList = styled.ul<{ isMobile: boolean, isSideBarOpen: boolean }>`
list-style: none;
display:flex;
flex-direction: column;
${({ isMobile }) => isMobile ? 'gap: 20px' : 'gap: 24px'};
${({ isSideBarOpen }) => isSideBarOpen ? 'overflow-y: hidden' : 'overflow-y: auto'};
max-height: 1260px;
height: 100%;
overflow-x: hidden;
padding: 0 1rem;


scrollbar-width: thin; /* For Firefox */
scrollbar-color: #a0a3bd transparent; /* For Firefox */

&::-webkit-scrollbar {
  width: 10px;
  height: 150px;
}

&::-webkit-scrollbar-thumb {
  background-color: #a0a3bd;
  border-radius: 10px;
  background-clip: padding-box;
  padding: 20px;

}

// Affects the track underneath/above the thumb
&::-webkit-scrollbar-track {
    background-color: transparent; /* Hide the scrollbar track */
    border-radius: 10px;
  
  }

  ${({ isMobile, }) => {
    if (isMobile) {
      return css`
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
        ::-webkit-scrollbar {
          display: none; /* Hide scrollbar for Chrome, Safari, and Opera */
        }

        max-height: 100vh; 
    `
    }
  }}
`

export const StyledHeading3 = styled.h3`
margin: 0;
color: #a9a9c4;
font-size: 0.8rem;
font-weight: 400;
line-height: 22px;
letter-spacing: 0.25px;
padding-left: 1rem;

`

export const TotalResultsWrapper = styled.div`
height: 17px;
display: flex;
`
