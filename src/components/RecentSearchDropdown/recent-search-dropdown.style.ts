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
    // padding: '16px 16px',
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
    // padding: '16px 16px',
    position: 'absolute',
    top: '67px',
    zIndex: '14',
}

export const TitleContainerSX = {
    display: 'flex',
    width: '100%',
    padding: '16px 16px'

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

export const StyledListItem = styled.li <{ isMobile: boolean }>`
color: ${RecentSearchStyleDictonary.TEXT_COLOR};
font-size: ${RecentSearchStyleDictonary.FONT_SIZE};
line-height: 1rem;
align-items: center;
display: flex;
justify-content: space-between;
cursor: pointer;
padding: 4px 16px;
transition: background-color 0.3s;
${({ isMobile }) => isMobile ? 'height: 42' : ''}px;
${({ isMobile }) => isMobile ? 'border-bottom: 1px solid #D9DBE9' : ''};


&:hover {
    background-color: #D9DBE9;
    cursor: pointer;
    border-radius: 7px;
}
`


export const StyledRemoveIconWrapper = styled.span`
background-color: transparent;
cursor: pointer;
display: flex;
align-items: center;

&:hover {
    background-color: rgb(169 153 153);
    border-radius: 40%;
   

}
 
& > * {
color: ${RecentSearchStyleDictonary.ICON_CLOSE_COLOR};



}
`

export const MobileRecentSearchWrapper = styled.div`
max-width: 375px;
width: 100%;
height: calc(100vh-74px);
// display: flex;
// flex-direction: column;
background-color:#ebebf7 ;
z-index: 14;
position: absolute;
bottom: 0;
top: 74px;


`
export const MobileTitleWrapper = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
padding: 16px 16px;

`

export const MobileStyledList = styled.ul`
list-style: none;
margin: 0;
padding: 0;

`
