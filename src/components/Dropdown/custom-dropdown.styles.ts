import { styled, Select, InputLabel } from "@mui/material";
import { CustomDropdownProps } from "../../models/custom-dropdown-interface";

enum DropdownColors {
    TEXT_COLOR = '#5A5A89',
    BG_COLOR = '#FFFFFF',
    HOVER_ITEM_COLOR = '#DFE0EB'

}

export const StyledDropdown = styled(Select)((props: CustomDropdownProps) => `
width: ${props.width || '175px'};
height: ${props.height || '47px'};
border-radius: 10px;
padding: 15px;
gap: 10px;
background-color: ${DropdownColors.BG_COLOR};
font-weight: ${props.fontWeight || '400'};
color: ${DropdownColors.TEXT_COLOR};
font-size: 14px;
padding-left: 5px;

  & .MuiOutlinedInput-notchedOutline{
    border: none;
    outline: none;
  };
`
)

export const StyledInputLabel = styled(InputLabel)`
color: #5A5A89;
`

export const StyledMenuListSX = {
    width: '175px',
    paddingBottom: '3px',
    paddingTop: '3px',
    maxHeight: '125px',
    overflow: 'auto',
    borderRadius: '8px',

    '&::-webkit-scrollbar': {
        width: '5px'
    },

    '&::-webkit-scrollbar-track': {
        webkitBorderRadius: '5px',
        borderRadius: '5px'
    },

    '&::-webkit-scrollbar-thumb': {
        webkitBorderRadius: '6px',
        height: '50px',
        width: '5px',
        borderRadius: '6px',
        background: `${DropdownColors.TEXT_COLOR}`,
    }
}

export const StyledMenuItemSX = {
    color: `${DropdownColors.TEXT_COLOR}`,
    width: '100%',
    maxWidth: '190px',
    fontWeight: '400',
    lineHeight: '16px',
    fontSize: '12px',
    letterSpacing: '0.1px',
    backgroundColor: `${DropdownColors.BG_COLOR}`,

    '&:hover': {
        backgroundColor: `${DropdownColors.HOVER_ITEM_COLOR}`,
        width: '100%'
    }
}
