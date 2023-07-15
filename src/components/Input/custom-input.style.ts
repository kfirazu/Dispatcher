// import { styled } from "@mui/material";

import styled from "styled-components";

export const StyledInput = styled.input`
width: 663px;
height: 50px;
border: 1px solid #D9DBE9;
border-radius: 10px;
border: 1px;
padding: 8px 8px 8px 55px;
gap: 10px;
background-color: #FFFFFF;
color: #5A5A89;
position: relative;

& ::placeholder {
    color: #5A5A89;
    font-size: 14px;
    line-height: 22px;
    letter: 0.25px;
}


`

// export const StyledLabel = styled.label`
// color: 
// `

export const StyledIcon = styled.div`
height: 24px;
width: 24.5px;
background-color: transparent;
box-sizing:border-box;
position: absolute;
z-index: 5;
left:16.75px;
top: 15px;
`

export const InputWrapper = styled.div`
position: relative;

`