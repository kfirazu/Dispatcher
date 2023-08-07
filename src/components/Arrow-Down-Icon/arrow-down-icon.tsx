import { FC } from "react"
import StyledArrowIcon, { StyledSvg } from "./arrow-down-icon.style"
import arrowDownIcon from '../../assets/icon/arrow-down-icon.svg'


interface ArrowDownIconProps {
    top?: string
    handleClick?: () => void
    disabled?: boolean
}
export const ArrowDownIcon: FC<ArrowDownIconProps> = ({ top, handleClick, disabled }) => {

    return (
        <StyledArrowIcon onClick={handleClick}>
            <StyledSvg src={arrowDownIcon}  top={top} disabled={disabled} />
        </StyledArrowIcon >

    )
}