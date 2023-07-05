import { FC } from 'react'
import { CustomButtonProps } from './button.style'
import StyledButton from './button.style'
import ArrowRightIcon from '../Arrow-Right-Icon/arrow-right'

const CustomButton: FC<CustomButtonProps> = ({
    backgroundColor,
    textColor,
    borderRadius,
    padding,
    children,
    hover,
    opacity,
    width,
    onClick,
    fontSize,
    fontWeight,
    textTransform
}) => {
    return (
        <>
            <StyledButton
                backgroundColor={backgroundColor}
                textColor={textColor}
                borderRadius={borderRadius}
                padding={padding}
                hover={hover}
                opacity={opacity}
                width={width}
                onClick={onClick}
                fontSize={fontSize}
                fontWeight={fontWeight}
                textTransform={textTransform}
            >
                {children}
                <ArrowRightIcon />
            </StyledButton>
        </>
    )
}
export default CustomButton