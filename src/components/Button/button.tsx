import { FC } from 'react'
import { ButtonTypesDictonary, CustomButtonProps, sharedButtonStyles } from './button.style'
import StyledButton from './button.style'
import ArrowRightIcon from '../Arrow-Right-Icon/arrow-right'

const CustomButton: FC<CustomButtonProps> = ({ onClick, children, type, sx, url, isIcon }) => {

    const isMobile = useIsMobile()

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
                <StyledChildrenWrapper isMobile={isMobile}>
                    {children}
                </StyledChildrenWrapper>
                {isIcon && (
                    <ArrowRightWrapper>
                        <ArrowRightIcon />
                    </ArrowRightWrapper>
                )}
            </StyledButton>
        </>
    )
}
export default CustomButton