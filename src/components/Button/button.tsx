// import { CustomizedButton, CustomButtonProps } from "./button.style"
import { FC } from 'react'
import { CustomButtonProps } from './button.style'


// interface ButtonProps {
//     height: string
//     width: string
//     text: string
//     color: string
//     backgroundColor: string
//     radius: string
//     border: string
//     onClick: () => void
//     children?: React.ReactNode

// }

// const Button: FC<ButtonProps> = ({
//     height, width, text, color,
//     backgroundColor, radius, border,
//     onClick, children
// }) => {
//     return (
//         <button></button>

//     )

// }


// const CustomiezedButton = ({ backgroundColor }: (CustomButtonProps)) => {
//     return (
//         <CustomizedButton variant="contained" backgroundColor={backgroundColor} onClick={() => console.log('you clicked me')}>
//             Hello world!!
//         </CustomizedButton>


//     )

// }

// export default CustomiezedButton

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
    width
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
            >
                {children}
            </StyledButton>
            <ArrowRightIcon />
        </>
    )
}
export default CustomButton