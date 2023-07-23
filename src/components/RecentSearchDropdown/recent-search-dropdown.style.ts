import { SxProps } from "@mui/material";
import styled from "styled-components";


export interface RecentSeearchProps {
    sx?: SxProps

}

enum RecentSearchStyleDictonary {
    TEXT_COLOR = "#5A5A89 ",
    BG_COLOR = "#FFFFFF",
    ICON_CLOSE_COLOR = "#DFE0EB",
    FONT_SIZE = "12px"

}
export const StyledBoxSx = {
    maxWidth: '663px',
    width: '100%',
    maxHeight: '132px',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: `${RecentSearchStyleDictonary.BG_COLOR}`,
    boxShadow: ' 0px 4px 12px 0px #00000014',
    borderRadius: '10px',
    overflowY: 'hidden',
    padding: '16px 16px',
    position: 'absolute',
    top: '56px',
    zIndex: '14',

}

export const TabletStyledBoxSx = {
    maxWidth: '423px',
    width: '100%',
    maxHeight: '132px',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: `${RecentSearchStyleDictonary.BG_COLOR}`,
    boxShadow: ' 0px 4px 12px 0px #00000014',
    borderRadius: '10px',
    overflowY: 'hidden',
    padding: '16px 16px',
    position: 'absolute',
    top: '67px',
    zIndex: '14',
}

export const TitleContainerSX = {
    display: 'flex',
    width: '100%',

}

export const StyledClearSpan = styled.span`
    align-self: center;
    font-weight: 700;
    color: ${RecentSearchStyleDictonary.TEXT_COLOR};
    letter-spcaing: 22px;
    font-size: ${RecentSearchStyleDictonary.FONT_SIZE};
    max-width: 38px;
    cursor: pointer;
    
`

export const StyledHeading4 = styled.h4`
flex-grow: 1;
color: ${RecentSearchStyleDictonary.TEXT_COLOR};
font-weight: 500;
line-height: 1rem;
font-size: ${RecentSearchStyleDictonary.FONT_SIZE};
margin: 0;
`

export const StyledUl = styled.ul`
list-style: none;
display: flex;
flex-direction: column;
padding: 0;
margin: 0;
z-index: 12;

// & :hover {
//     background-color: #f2f2f2;
//     border-radius: 7px;
// }

`

export const StyledListItem = styled.li`
color: ${RecentSearchStyleDictonary.TEXT_COLOR};
font-size: ${RecentSearchStyleDictonary.FONT_SIZE};
line-height: 1rem;
align-items: center;
display: flex;
justify-content: space-between;
cursor: pointer;
padding: 4px 0;
transition: background-color 0.3s;

&:hover {
    background-color: #D9DBE9;
    cursor: pointer;
    border-radius: 7px;
}
`


export const StyledRemoveIconWrapper = styled.span`
background-color: transparent;
cursor: pointer;

&:hover {
    background-color: #e6e6e6;
    border-radius: 50%;
    // padding: 5px;

}
 
& > * {
color: ${RecentSearchStyleDictonary.ICON_CLOSE_COLOR};



}
`
