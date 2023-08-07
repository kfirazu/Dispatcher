import styled, { css } from 'styled-components';

export const TitleStyled = styled.div<{ isFirstSearch: boolean, isMobile: boolean, isTablet: boolean }>`
  display: flex;
  flex-direction: row;
  width:100%;
  ${({ isFirstSearch }) => isFirstSearch ? 'opacity: 1;' : 'opacity: 0.5;'}
  ${({ isFirstSearch }) => isFirstSearch ? 'color: #14142b;' : 'color: #5a5a89;'}
  ${({ isFirstSearch }) => isFirstSearch ? 'font-size: 1.5rem;' : 'font-size: 0.875rem;'}

    border-top: 1px solid rgb(217, 219, 233);
    padding-top: 13px;
    ${({ isMobile, isTablet }) => {
    if (isMobile) {
      return css`
      padding-left: 1rem
    
    `
    } else if (isTablet) {
      return css`
      padding-left: 1rem
    
      `
    }
  }}

`



