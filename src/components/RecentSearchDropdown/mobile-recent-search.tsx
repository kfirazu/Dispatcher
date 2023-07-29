import { FC, MouseEvent } from "react"
import useIsMobile from "../../hooks/useIsMobile"
import { useAppDispatch, useAppSelector } from "../../store/hooks.store"
import { clearRecentSearch, removeRecentSearch } from "../../store/news/recent-serach.reducer"
import { MobileRecentSearchWrapper, MobileStyledList, MobileTitleWrapper, StyledClearSpan, StyledHeading4, StyledListItem, StyledRemoveIconWrapper } from "./recent-search-dropdown.style"
import { recentSearchTerm } from "./recent-search-dropdown"
import clearIcon from '../../assets/icon/remove-icon.svg'
import StyledIcon from "../icon/icon.style"

interface RecentSearchDropdownProps {
    //FIX : Should accept recent searches to display
    isFocused?: boolean
    onCloseModal?: () => void
    handleSearchTermClick: (ev: MouseEvent<HTMLElement>, searchTerm: string) => void

}


const MobileRecentSearch: FC<RecentSearchDropdownProps> = ({ handleSearchTermClick }) => {

    const dispatch = useAppDispatch()
    const isMobile = useIsMobile()
    const recentSearchArr = useAppSelector(state => state.recentSearch.recentSearches)


    const onClearRecentSearch = () => {
        // setRecentSearchArr([])
        dispatch(clearRecentSearch())
    }

    const onRemoveRecentSearch = (ev: MouseEvent<HTMLElement>, searchTermId: string) => {
        ev.stopPropagation()
        // const updatedSearchArr = recentSearchArr.filter((item) => item.id !== searchTermId);
        // setRecentSearchArr(updatedSearchArr);
        dispatch(removeRecentSearch(searchTermId))

    }
    return (

        <>
            {isMobile &&
                <MobileRecentSearchWrapper>
                    <MobileTitleWrapper>
                        <StyledHeading4>RECENT SEARCHES</StyledHeading4>
                        <StyledClearSpan onClick={onClearRecentSearch}>CLEAR</StyledClearSpan>
                    </MobileTitleWrapper>
                    {recentSearchArr.length > 0 && (
                        <MobileStyledList>
                            {recentSearchArr.map((term: recentSearchTerm, idx) => (
                                <StyledListItem
                                    isMobile={isMobile}
                                    key={idx}
                                    onClick={(ev) => handleSearchTermClick(ev, term.searchTerm)}
                                >
                                    {term.searchTerm}
                                    <StyledRemoveIconWrapper
                                        onClick={(ev) => onRemoveRecentSearch(ev, term.id)}
                                    >
                                            <StyledIcon src={clearIcon} width="12" height="12" />

                                    </StyledRemoveIconWrapper>
                                </StyledListItem>
                            ))}

                        </MobileStyledList>


                    )}


                </MobileRecentSearchWrapper>
            }
        </>
    )
}

export default MobileRecentSearch