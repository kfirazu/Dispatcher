import styled, { css } from "styled-components";


export const StyledList = styled.ul<{ isMobile: boolean, isTablet: boolean, isSideBarOpen: boolean }>`
list-style: none;
display:flex;
flex-direction: column;
${({ isMobile }) => isMobile ? 'gap: 20px' : 'gap: 24px'};
max-height: 82%;
height: 100%;
margin: 0;
// overflow-x: hidden;
 ${({ isSideBarOpen }) => isSideBarOpen && 'overflow-y: hidden'};
padding: 0 1rem 0 0;
${({ isMobile, isTablet }) => {
    if (isMobile) {
      return css`
      padding: 0 1rem 0 1rem;
  `
    } else if (isTablet) {
      return css`
      padding: 0 1rem 0 1rem;
`
    }
  }}



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

`
export const StyledFirstSearchHeading = styled.h2`
font-size: 1.5rem;
font-weight: 500;
line-height: 2rem;
color: #262146;
`


export const TotalResultsWrapper = styled.div<{ isTablet: boolean }>`
height: 17px;
display: flex;
${({ isTablet }) => isTablet && 'padding: 5px 16px'};
`

export const FeedListWrapper = styled.div<{ noArticles: boolean }>`
${({ noArticles }) => noArticles && 'width: 50vw'};
${({ noArticles }) => noArticles && 'margin-top: 18vh'};



`
