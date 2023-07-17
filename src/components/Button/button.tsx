import { FC } from 'react'
import { ButtonTypesDictonary, CustomButtonProps, sharedButtonStyles } from './button.style'
import StyledButton from './button.style'
import ArrowRightIcon from '../Arrow-Right-Icon/arrow-right'

const CustomButton: FC<CustomButtonProps> = ({ onClick, children, type, sx, url }) => {

    const buttonStyles = {
        ...sharedButtonStyles,
        ...ButtonTypesDictonary[type]
    }

    const navigateToNewTab = '_balnk'

    return (
        <>
            <StyledButton
                onClick={onClick}
                sx={{ ...buttonStyles, ...sx }}
                href={url}
                target={navigateToNewTab}
            >
                {children}
                <ArrowRightIcon />
            </StyledButton>
        </>
    )
}
export default CustomButton