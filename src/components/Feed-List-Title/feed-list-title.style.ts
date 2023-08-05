import styled, { css } from 'styled-components';

import { TitleProps } from './feed-list-title';

export const TitleStyled = styled.div`
  ${({ firstVisit }: TitleProps) => `
  display: flex;
  flex-direction: row;
  width:100%;
    opacity: ${firstVisit ? '1' : '0.5'};
    color: ${firstVisit ? '#14142b' : '#5a5a89'};
    font-size: ${firstVisit ? 1.5 : 0.875}rem;
    border-top: 1px solid rgb(217, 219, 233);
    padding-top: 13px;

  `}
`;

// ${({ isMobile, isTablet }) => {
//     if (isMobile) {
//         return css`
//     font-size: 0.75rem;


// `
//     } else if (isTablet) {
//         return css`
//     padding-block: 0.5em;

//     `
//     }
// }}
