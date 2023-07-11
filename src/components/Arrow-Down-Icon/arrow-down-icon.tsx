import { FC } from "react"
import StyledArrowIcon, { StyledSvg } from "./arrow-down-icon.style"
import arrowDownIcon from '../../assets/icon/arrow-down-icon.svg'


interface ArrowDownIconProps {
    top?: string
    handleClick?: () => void
}
export const ArrowDownIcon: FC<ArrowDownIconProps> = ({ top, handleClick }) => {

    return (
        <StyledArrowIcon onClick={handleClick}>
            <StyledSvg src={arrowDownIcon}  top={top} />
        </StyledArrowIcon >

    )
}