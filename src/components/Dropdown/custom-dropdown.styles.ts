import { styled, Select } from "@mui/material";


export const StyledDropdown = styled(Select)`
width: 190px;
height: 47px;
border-radius: 10px;
padding: 15px;
gap: 10px;
border: 1px solid;
background-color: white;
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