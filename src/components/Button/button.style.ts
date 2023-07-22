import { styled, SxProps, Link } from '@mui/material'
import { ReactNode } from 'react'
import styledCmp from 'styled-components'


type ButtonType = 'primary' | 'secondary'

export interface CustomButtonProps {
    onClick?: () => void
    children?: ReactNode
    sx?: SxProps
    type: ButtonType
    url: string
}

export enum StyledButtonColors {
    PRIMARY_BGC = '#0058B9',
    PRIMARY_TXT = '#FFFFFF',
    PRIMARY_BG_HOVER = '#0058B9',
    SECONDARY_BGC = '#D9DBE9',
    SECONDARY_TXT = '#5A5A89',
    SECONDARY_BG_HOVER = '#D9DBE9'

}

export const ButtonTypesDictonary = {
    primary: {
        backgroundColor: StyledButtonColors.PRIMARY_BGC,
        color: StyledButtonColors.PRIMARY_TXT,

        '&:hover': {
            color: StyledButtonColors.PRIMARY_TXT,
            textDecoration: 'none',
            opacity: '0.8'
        }


    },
    secondary: {
        backgroundColor: StyledButtonColors.SECONDARY_BGC,
        color: StyledButtonColors.SECONDARY_TXT,

        '&:hover': {
            color: StyledButtonColors.SECONDARY_TXT,
            textDecoration: 'none',
            opacity: '0.8'

        }
    }
}

export const sharedButtonStyles = {
    borderRadius: '20px',
    padding: '10px 16px',
    fontSize: '14px',
    fontWeight: '500',
    cursor: 'pointer',
    textDecoration: 'none',
    width: '100%'

}

export const StyledButtonWrapper = styledCmp.div<{ isMobile?: boolean }>`
display:flex;
align-self: flex-end;
justify-content: space-around;
${({ isMobile }) => isMobile ? 'align-self: center' : ''};
${({ isMobile }) => isMobile ? 'height: 36px' : ''};
${({ isMobile }) => isMobile ? 'max-width: 300px' : 'max-width: 226px'};
${({ isMobile }) => isMobile ? 'width: 100%' : 'width: 226px'};
${({ isMobile }) => isMobile ? 'margin-top: 0' : 'margin-top: 14px;'};

`

const StyledButton = styled(Link) <{ isMobile: boolean }>`
list-style: none;
display: flex;
align-items: center;
width: 100%;
${({ isMobile }) => isMobile ? 'justify-content: space-around' : ''};



`
export const StyledChildrenWrapper = styledCmp.span<{ isMobile: boolean }>`
max-width: 180px;
${({ isMobile }) => isMobile ? 'text-align: end' : ''};

width: 100%;
`

export const ArrowRightWrapper = styledCmp.span`
cursor: pointer;
display: flex;
`



export default StyledButton

