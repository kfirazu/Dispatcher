import styled from "styled-components"

export const StyledDatepickerInput = styled.input`
max-width: 175px;
width: 100%;
height: 47px;
border-radius: 10px;
border: none;
background-color: #FFFFFF;
gap: 10px;
color: #5A5A89;
font-size: 14px;
display: flex;
align-items: center;
position: relative;

&:focus-visible {
    outline: none;
    border: none;
}
`

export const StyledInputWrapper = styled.div`
display: flex;
max-width: 175px;
`