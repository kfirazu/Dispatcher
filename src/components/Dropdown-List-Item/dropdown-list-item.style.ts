import { List, ListItem, styled } from "@mui/material";


const StyledListItem = styled(ListItem)(({ theme }) => `
    color: #5A5A89;
    width: 160px;
    max-width: 190px;
    font-weight: 400;
    line-height: 16px;
    font-size: 12px;
    letter-spacing: 0.1px;
    background-color: #FFFFFF;
    // border: 1px solid #E7E8E9;

    :hover {
        background-color: #DFE0EB;
        width:100%
      };
`
)

export default StyledListItem


export const StyledList = styled(List)(({ theme }) => `
width: 190px;
padding-bottom: 3px;
padding-top: 3px;
max-height: 125px;
overflow: auto;

::-webkit-scrollbar {
  width: 5px;
}

::-webkit-scrollbar-track {
  -webkit-border-radius: 5px;
  border-radius: 5px;
}

::-webkit-scrollbar-thumb {
  -webkit-border-radius: 6px;
  height: 50px;
  width: 5px;
  border-radius: 6px;
  background: #5A5A89;
  // -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
}
`)

