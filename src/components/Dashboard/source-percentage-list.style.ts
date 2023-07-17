import styled from "styled-components";


export const StyledSourceListWrapper = styled.ul`
width: 100%;
display: flex;
flex-direction: column;
`

export const StyledSourceListItem = styled.li`
width: 100%;
display:flex;
justify-content: space-between;
padding-left: 10px;
position: relative; 


`
export const SourceSpan = styled.span<{ color?: string; }>` 
font-size: 14px;
line-height: 20px; 
${({ color }) => `color: ${color}`};
padding-right: 5px;


&::after {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    color: black; 

}

`



