import { FC } from 'react'
import { ArrowRightWrapper, ButtonTypesDictonary, CustomButtonProps, StyledButtonWrapper, sharedButtonStyles, StyledChildrenWrapper } from './button.style'
import StyledButton from './button.style'
import ArrowRightIcon from '../Arrow-Right-Icon/arrow-right'
import useIsMobile from '../../hooks/useIsMobile'

const CustomButton: FC<CustomButtonProps> = ({ onClick, children, type, sx, url, isIcon }) => {

    const isMobile = useIsMobile()

    const buttonStyles = {
        ...sharedButtonStyles,
        ...ButtonTypesDictonary[type]
    }

    const navigateToNewTab = '_balnk'

    return (
        <StyledButtonWrapper isMobile={isMobile}>
            <StyledButton
                onClick={onClick}
                sx={{ ...buttonStyles, ...sx }}
                href={url}
                target={navigateToNewTab}
                isMobile={isMobile}
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
        </StyledButtonWrapper>
    )
}
export default CustomButton