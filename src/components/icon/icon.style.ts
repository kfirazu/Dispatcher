import styled from "styled-components";

 const StyledIcon = styled.img<{ width?: string, height?: string, disabled?: boolean }>`
${({ width = '20' }) => `width: ${width}`}px;
${({ height = '20' }) => `height: ${height}`}px;
${({ disabled }) => disabled ?`pointer-events: none` : ''};

cursor: pointer;
`

export default StyledIcon