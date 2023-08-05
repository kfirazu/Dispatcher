import { FC, MouseEvent } from "react";
import {
    StyledBoxSx, StyledClearSpan, StyledHeading4,
    StyledListItem, StyledRemoveIconWrapper, StyledUl, TabletStyledBoxSx, TitleContainerSX
} from "./recent-search-dropdown.style";
import CloseIcon from '@mui/icons-material/Close';
import { Box } from "@mui/material"
import TransparentScreen from "./transparent-screen";
import { UseIsTablet } from "../../hooks/useIsTablet";
import { useAppDispatch, useAppSelector } from "../../store/hooks.store";
import { clearRecentSearch, removeRecentSearch } from "../../store/news/recent-serach.reducer";
import useIsMobile from "../../hooks/useIsMobile";

interface RecentSearchDropdownProps {
    isFocused: boolean
    onCloseModal: () => void
    handleSearchTermClick: (ev: MouseEvent<HTMLElement>, searchTerm: string) => void

}

export interface recentSearchTerm {
    id: string
    searchTerm: string
}
const RecentSearchDropdown: FC<RecentSearchDropdownProps> = ({ isFocused, onCloseModal, handleSearchTermClick }) => {

    const isTablet = UseIsTablet()
    const isMobile = useIsMobile()
    const dispatch = useAppDispatch()
    const recentSearchArr = useAppSelector(state => state.recentSearch.recentSearches)

    const onRemoveRecentSearch = (ev: MouseEvent<HTMLElement>, searchTermId: string) => {
        ev.stopPropagation()
        // const updatedSearchArr = recentSearchArr.filter((item) => item.id !== searchTermId);
        // setRecentSearchArr(updatedSearchArr);
        dispatch(removeRecentSearch(searchTermId))

    }

    const onClearRecentSearch = () => {
        // setRecentSearchArr([])
        dispatch(clearRecentSearch())
    }
    return (
        <>
        {/* only for desktop */}
            {isFocused && !isMobile && (
                <>
                    <TransparentScreen onCloseModal={onCloseModal} />
                    <Box sx={isTablet ? TabletStyledBoxSx : StyledBoxSx}>
                        <Box sx={TitleContainerSX}>
                            <StyledHeading4>RECENT SEARCHES</StyledHeading4>
                            <StyledClearSpan onClick={onClearRecentSearch}>CLEAR</StyledClearSpan>
                        </Box>
                        {recentSearchArr.length > 0 && (
                            <StyledUl>
                                {recentSearchArr.map((term: recentSearchTerm, idx) => (
                                    <StyledListItem isMobile={isMobile}
                                        key={idx}
                                        onClick={(ev) => handleSearchTermClick(ev, term.searchTerm)}
                                    >
                                        {term.searchTerm}
                                        <StyledRemoveIconWrapper
                                            onClick={(ev) => onRemoveRecentSearch(ev, term.id)}
                                        >
                                            <CloseIcon style={{ fontSize: '1.2rem' }} />
                                        </StyledRemoveIconWrapper>
                                    </StyledListItem>
                                ))}
                            </StyledUl>
                        )}
                    </Box>
                </>
            )}
        </>
    )
}

export default RecentSearchDropdown