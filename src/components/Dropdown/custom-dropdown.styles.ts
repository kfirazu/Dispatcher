import { styled, Select, InputLabel, SelectProps } from "@mui/material";

export interface CustomDropdownProps extends SelectProps {
    width?: string
    height?: string
    fontWeight?: string

}


export const StyledDropdown = styled(Select)((props: CustomDropdownProps) => `
width: ${props.width || '175px'};
height: ${props.height || '47px'};
border-radius: 10px;
padding: 15px;
gap: 10px;
background-color: white;
font-weight: ${props.fontWeight || '400'};
`
)

export const StyledInputLabel = styled(InputLabel)`
color: #5A5A89;
`



// OVERRIDE CLASSES
// export const StyledDropdown = styled(Select)(() => ({
//     width: 265,
//     '& .Mui-focused': {
//         '& fieldset': {
//             border: `1px solid salmon`
//         }
//     }
// }));


//OVERRIDE VARIABLES
// export const StyledCard = styled(Card)`
//   padding: 20px;
//   margin: 10px 0 20px 0;
//   box-shadow: none !important;
//   border: 1px solid ${NEUTRAL_SHADES[200]};
// `;