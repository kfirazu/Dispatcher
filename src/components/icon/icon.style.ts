import styled from "styled-components";

 const StyledIcon = styled.img<{ width?: string, height?: string }>`
${({ width = '20' }) => `width: ${width}`}px;
${({ height = '20' }) => `height: ${height}`}px;
cursor: pointer;
`

export default StyledIcon