import styled from "styled-components";

export const InputWrapper = styled.div`
position: relative;
display: flex;
align-items: center;
max-width: 663px;
width: 100%;

`

export const StyledInput = styled.input`
flex-grow: 1;
height: 50px;
border: 1px solid #D9DBE9;
border-radius: 10px;
border: 1px;
padding: 8px 8px 8px 55px;
gap: 10px;
background-color: #FFFFFF;
color: #5A5A89;
min-width: 280px;

& ::placeholder {
    color: #5A5A89;
    font-size: 14px;
    line-height: 22px;
    letter-spacing: 0.25px;
}

`

export const StyledIcon = styled.img`
height: 24px;
width: 24.5px;
background-color: transparent;
position: absolute;
border: 2px;
z-index: 5;
color: #5A5A89;
left:16.75px;
top: 15px;
`

