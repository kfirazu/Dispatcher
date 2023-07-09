import { FC } from "react"
import StyledArrowIcon, { StyledSvg } from "./arrow-down-icon.style"


interface ArrowDownIconProps {
    top?: string
    handleClick?: () => void
}
export const ArrowDownIcon: FC<ArrowDownIconProps> = ({ top, handleClick }) => {
    // const onOpenDropdown = () => {

    // }
    return (
        <StyledArrowIcon>
            <StyledSvg onClick={handleClick} width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg" top={top}>
                <path d="M16.3334 5.33334L9.00004 12.6667L1.66671 5.33334" stroke="#5A5A89" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </StyledSvg>
        </StyledArrowIcon >

    )
}