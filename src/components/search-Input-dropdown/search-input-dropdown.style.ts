import { styled, Select, InputLabel } from "@mui/material";
import { CustomDropdownProps } from "../../models/custom-dropdown-interface";

enum InputDropdownColors {
    TEXT_COLOR = '#5A5A89',
    BORDER_COLOR = '#D9DBE9',
    HOVER_ITEM_COLOR = '#DFE0EB'

}

export const StyledInputDropdown = styled(Select)((props: CustomDropdownProps) =>`
width: 138px;
height: 40px;
position: absolute;
gao: 16px;
background-color: transparent;
color: ${InputDropdownColors.TEXT_COLOR};
top: 7px;
right: 5px;
font-size: 14px;
outline: none;
border-left: 0.5px solid ${InputDropdownColors.BORDER_COLOR};

& .MuiOutlinedInput-notchedOutline {
    border: none;
}

`
)

export const StyledInputLabel = styled(InputLabel)(({ theme }) => `
color: #FFFFFF;

`)


export const menuItemSX = {
    width: '139px',
    backgroundColor: 'transparent',
    color: InputDropdownColors.TEXT_COLOR,
    fontSize: '12px',
    fontWeight: '500',
    lineHeight: '16px',
    borderStyle: "none",

    "&hover": {
        backgroundColor: InputDropdownColors.HOVER_ITEM_COLOR,
        width: '100%'
    }


}