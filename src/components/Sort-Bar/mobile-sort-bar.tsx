import { MobileSortBarContainer, StyledTextContainer } from "./sort-bar.style"
import SortIcon from '../../assets/icon/sort-icon.svg'
import arrowDownIcon from '../../assets/icon/arrow-down-icon.svg'
import StyledIcon from "../icon/icon.style"
import useIsMobile from "../../hooks/useIsMobile"
import { UseIsTablet } from "../../hooks/useIsTablet"
import { FC } from "react"
import { useAppDispatch } from "../../store/hooks.store"
import { setIsSideBarOpen } from "../../store/system/system.reducer"
import { setMobileSideBarType } from "../../store/news/filter.reducer"

export enum SideBarType {
    FILTER = 'filter',
    SORT_BY = 'sort-by'
}
interface MobileSortBarPeops {
}
const MobileSortBar: FC<MobileSortBarPeops> = () => {

    const dispatch = useAppDispatch()

    const onOpenSideBar = (type: string) => {
        dispatch(setMobileSideBarType(type))
        dispatch(setIsSideBarOpen(true))
    }

    const isMobile = useIsMobile()
    const isTablet = UseIsTablet()

    return (
        <MobileSortBarContainer isMobile={isMobile} isTablet={isTablet}>
            <StyledTextContainer onClick={() => onOpenSideBar(SideBarType.SORT_BY)}>Sort by
                <StyledIcon src={arrowDownIcon} width="16" height="16"></StyledIcon>
            </StyledTextContainer>
            <StyledIcon src={SortIcon} width="28" height="28" onClick={() => onOpenSideBar(SideBarType.FILTER)}></StyledIcon>
        </MobileSortBarContainer>


    )
}

export default MobileSortBar