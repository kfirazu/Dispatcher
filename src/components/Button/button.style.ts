import { styled, ButtonProps } from '@mui/material'
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
    fontWeight?: string
    lineHeight?: string
    padding?: string
    endIcon?: ReactNode
    opacity?: string
    onClick?: () => void;
    textTransform?: string

}

const StyledButton = styled('button')((props: CustomButtonProps) => `
    background-color: ${props.backgroundColor};
    color: ${props.textColor};
    font-size: ${props.fontSize};
    border-radius: ${props.borderRadius};
    padding: ${props.padding};
    width: ${props.width};
    max-width: ${props.width};
    font-weight: ${props.fontWeight};
    text-transform: ${props.textTransform};
    position: relative;
    display: flex;
    
    :hover {
        background-color: ${props.hover};
        opacity: ${props.opacity}
      };
    `
)

export default StyledButton
