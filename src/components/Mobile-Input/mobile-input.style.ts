import styled from "styled-components";

export const StyledFormContainer = styled.div`
max-width: 375px;
max-height: 74px;
width: 100%;
height:100%;
display: flex;
justify-content: center;
align-items: center;
background-color: #FFFFFF;
padding: 0 16px 0 16px;


`
export const StyledFrom = styled.form`
max-width: 308px;
width: 100%;
height: 100%;
 
  
  `

export const StyledTextInput = styled.input`
    max-width: 308px;
    width: 100%;
    height: 100%;
    border:none;
    outline:none;
    color: #5A5A89;
    height: 100%;
    margin-left: 0.625rem;
    font-size: 14px;

    &::placeholder {
        color: #5A5A8980;

    }





    &:focused {
        border:none;
        outline:none;
    }


  `