import { styled, SxProps, Link } from '@mui/material'
import { ReactNode } from 'react'


type ButtonType = 'primary' | 'secondary'

export interface CustomButtonProps {
    onClick?: () => void
    children?: ReactNode
    sx?: SxProps
    type: ButtonType
    url?: string
    isIcon: boolean
}

export enum StyledButtonColors {
    PRIMARY_BGC = '#0058B9',
    PRIMARY_TXT = '#FFFFFF',
    PRIMARY_BG_HOVER = '#0058B9',
    SECONDARY_BGC = '#D9DBE9',
    SECONDARY_TXT = '#5A5A89',
    SECONDARY_BG_HOVER = '#D9DBE9'

}

const StyledButton = styled(Link)`
list-style: none;
position: relative;
`

export const sharedButtonStyles = {
    borderRadius: '20px',
    padding: '10px 16px',
    fontSize: '14px',
    fontWeight: '500',
    cursor: 'pointer',
    textDecoration: 'none',

}

export const ButtonTypesDictonary = {
    primary: {
        backgroundColor: StyledButtonColors.PRIMARY_BGC,
        color: StyledButtonColors.PRIMARY_TXT,
        width: '226px',

        '&:hover': {
            color: StyledButtonColors.PRIMARY_TXT,
            textDecoration: 'none',
            opacity: '0.8'
        }


    },
    secondary: {
        backgroundColor: StyledButtonColors.SECONDARY_BGC,
        color: StyledButtonColors.SECONDARY_TXT,
        width: '226px',

        '&:hover': {
            color: StyledButtonColors.SECONDARY_TXT,
            textDecoration: 'none',
            opacity: '0.8'

        }
    }
}

export default StyledButton

