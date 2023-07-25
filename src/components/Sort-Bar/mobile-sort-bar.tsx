import { MobileSortBarContainer, StyledTextContainer } from "./sort-bar.style"
import SortIcon from '../../assets/icon/sort-icon.svg'
import arrowDownIcon from '../../assets/icon/arrow-down-icon.svg'
import StyledIcon from "../icon/icon.style"
import useIsMobile from "../../hooks/useIsMobile"
import { UseIsTablet } from "../../hooks/useIsTablet"
import { FC } from "react"
import { useAppDispatch } from "../../store/hooks.store"
import { setIsSideBarOpen } from "../../store/system/system.reducer"


interface MobileSortBarPeops {
}
const MobileSortBar: FC<MobileSortBarPeops> = () => {

    const dispatch = useAppDispatch()

    const onOpenSideBar = () => {
        dispatch(setIsSideBarOpen(true))
    }

    const isMobile = useIsMobile()
    const isTablet = UseIsTablet()

    return (
        <MobileSortBarContainer isMobile={isMobile} isTablet={isTablet}>
            <StyledTextContainer onClick={onOpenSideBar}>Sort by
                <StyledIcon src={arrowDownIcon} width="16" height="16"></StyledIcon>
            </StyledTextContainer>
            <StyledIcon src={SortIcon} width="28" height="28" ></StyledIcon>
        </MobileSortBarContainer>


    )
}

export default MobileSortBar