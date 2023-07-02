import { styled, Button, ButtonProps } from '@mui/material'
import { ReactNode } from 'react'

export interface CustomButtonProps extends ButtonProps {
    backgroundColor?: string
    textColor?: string
    border?: string
    borderRadius?: string
    height?: string
    width?: string
    hover?: string
    fontSize?: string
    padding?: string
    endIcon?: ReactNode
    opacity: string

}

// const StyledButton = styled('button')((props: CustomButtonProps) => ({
//     backgroundColor: props.backgroundColor,
//     color: props.textColor,
//     foneSize: props.fontSize,
//     borderRadius: props.borderRadius,
//     padding: props.padding
// }))

// export default StyledButton

const StyledButton = styled('button')((props: CustomButtonProps) => `
    background-color: ${props.backgroundColor};
    color: ${props.textColor};
    font-size: ${props.fontSize};
    border-radius: ${props.borderRadius};
    padding: ${props.padding};
    width: ${props.width};
    position: relative;
    
    :hover {
        background-color: ${props.hover};
        opacity: ${props.opacity}
      };
    `
)

export default StyledButton


// const StyledButton = styled(Button, {

//     shouldForwardProp: (prop) => prop !== 'primary' && prop!== 'secondary'

// }) (({primary, theme}) => `
// background-color: ${primary ? theme.palette.grey[900] : theme.palette.grey[100]}
// `)

// export default StyledButton



// const TestingProps4 = styled(Box, {

//     // Configure which props should be forwarded on DOM
//     shouldForwardProp: (prop) => prop !== 'dark' && prop!== 'border'
  
//     })
  
  
//     (({ dark, border }) => `
  
//       background-color: ${dark? "black" : "white"};
//       color: ${dark? "white" : "black"};
//       border: ${border? "1rem solid pink" : 'none'}
  
//     `);