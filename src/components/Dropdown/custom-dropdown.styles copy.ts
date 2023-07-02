import { styled, TextField } from "@mui/material";


export const CustomTextField = styled(TextField)(() => ({
    width: 265,
    '& .Mui-focused': {
        '& fieldset': {
            border: `1px solid salmon`
        }
    }
}));


