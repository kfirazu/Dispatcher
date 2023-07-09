import styled from "styled-components";

const StyledArrowIcon = styled.span`
margin: auto;
cursor: pointer;
`

export default StyledArrowIcon

export const StyledSvg = styled.svg<{ top?: string }>`
cursor: pointer;
position: absolute; 
z-index: 5;
width: 24px;
top: ${({ top = '15' }) => top}px;
right: 15px;

`