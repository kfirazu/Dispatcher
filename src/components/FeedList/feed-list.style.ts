import styled from "styled-components";


export const StyledList = styled.ul`
list-style: none;
display:flex;
flex-direction: column;
gap: 24px;
overflow-y: auto;
max-height: 1260px;
height: 100%;
overflow-x: hidden;


scrollbar-width: thin; /* For Firefox */
scrollbar-color: #a0a3bd transparent; /* For Firefox */

&::-webkit-scrollbar {
  width: 10px;
  height: 150px;
}

&::-webkit-scrollbar-thumb {
  background-color: #a0a3bd;
  border-radius: 10px;
  // background-clip: padding-box;
  // padding-right: 20px;
  // padding-left: 20px;



}

&::-webkit-scrollbar-track {
    background-color: transparent; /* Hide the scrollbar track */
    border-radius: 10px;
  
  }
`

export const StyledHeading3 = styled.h3`
margin: 0;
color: #a9a9c4;
font-size: 0.8rem;
font-weight: 400;
line-height: 22px;
letter-spacing: 0.25px;
flex: 1;

`

export const TotalResultsWrapper = styled.div`
height: 17px;
display: flex;
`
