import { FC } from "react"
import StyledIcon from "./icon.style"

interface IconProps {
    width?: string
    height?: string
    icon?: string

}


const Icon: FC<IconProps> = ({ width, height, icon }) => {
    return (
        <StyledIcon src={icon} width={width} height={height}>

        </StyledIcon>
    )
}

export default Icon