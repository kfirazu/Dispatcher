import styled, { css } from "styled-components";


export const StyledSortBarContainer = styled.div`
max-width: 760px;
width: 100%
height: 47px;
display: flex;
gap: 20px;
margin-top: 20px;

& > * {
    flex-shrink: 1;
}

`

export const MobileSortBarContainer = styled.div<{isMobile: boolean, isTablet: boolean}>`
display: flex;
align-items: center;
justify-content: space-between;
max-width: 375px;
width: 100%;
height: 44px;
padding: 0px 12px 0px 16px;
background-color: #FFFFFF;
border: 1px solid #D9DBE9;
box-shadow: 0px 32px 64px 0px #0000000D;

${({ isMobile, isTablet }) => {

     if (isTablet) {
        return css`
        max-width: 768px;
        
`
    }
}}
`

export const StyledTextContainer = styled.span`
color: #5A5A89;
max-width: 78px;
width: 100%;
display: flex;
align-items: center;
justify-content: space-between;
cursor: pointer;
`