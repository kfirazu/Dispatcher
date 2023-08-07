import styled from "styled-components";

const StyledArrowIcon = styled.span`
margin: auto;
cursor: pointer;
`

export default StyledArrowIcon

export const StyledSvg = styled.img<{ top?: string, width?: string, height?: string, disabled?: boolean } >`
cursor: pointer;
position: absolute; 
z-index: 5;
width: 24px;
width: ${({ width = '18' }) => width}px;
top: ${({ top = '15' }) => top}px;
${({ disabled }) => disabled &&`pointer-events: none;`}
right: 15px;
font-wieght: 700;

`
