import { FC, MouseEvent, useState } from "react";
import {
    StyledBoxSx, StyledClearSpan, StyledHeading4,
    StyledListItem, StyledRemoveIconWrapper, StyledUl, TabletStyledBoxSx, TitleContainerSX
} from "./recent-search-dropdown.style";
import CloseIcon from '@mui/icons-material/Close';
import { Box } from "@mui/material"
import TransparentScreen from "./transparent-screen";
import { UseIsTablet } from "../../hooks/useIsTablet";

interface RecentSearchDropdownProps {
    //FIX : Should accept recent searches to display
    isFocused: boolean
    onCloseModal: () => void

}

interface recentSearchTerm {
    id: string
    searchTerm: string
}
const RecentSearchDropdown: FC<RecentSearchDropdownProps> = ({ isFocused, onCloseModal }) => {

    const isTablet = UseIsTablet()
    const [searchText, setSearchText] = useState<string | null>(null)
    const [recentSearchArr, setRecentSearchArr] = useState<recentSearchTerm[]>([
        { id: 'u101', searchTerm: 'soccer' },
        { id: 'u102', searchTerm: 'Bibi' },
        { id: 'u103', searchTerm: 'crypto' },
        { id: 'u104', searchTerm: 'crypto' },
        { id: 'u105', searchTerm: 'crypto' },
        { id: 'u106', searchTerm: 'crypto' }


    ])

    //FIX :Should accept as props
    const recentSearchToDisplay = recentSearchArr.slice(0, 3)

    const handleSearchTermClick = (ev: MouseEvent<HTMLElement>, searchTerm: string) => {
        ev.stopPropagation()
        setSearchText(searchTerm)
        onCloseModal()

    }

    const onRemoveRecentSearch = (ev: MouseEvent<HTMLElement>, searchTermId: string) => {
        ev.stopPropagation()
        const updatedSearchArr = recentSearchArr.filter((item) => item.id !== searchTermId);
        setRecentSearchArr(updatedSearchArr);

    }

    const onClearRecentSearch = () => {
        setRecentSearchArr([])
    }
    return (
        <>
            {isFocused && (
                <>
                    <TransparentScreen onCloseModal={onCloseModal} />
                    <Box sx={isTablet ? TabletStyledBoxSx : StyledBoxSx}>
                        <Box sx={TitleContainerSX}>
                            <StyledHeading4>RECENT SEARCHES</StyledHeading4>
                            <StyledClearSpan onClick={onClearRecentSearch}>CLEAR</StyledClearSpan>
                        </Box>
                        {recentSearchToDisplay.length > 0 && (
                            <StyledUl>
                                {recentSearchToDisplay.map((term: recentSearchTerm, idx) => (
                                    <StyledListItem
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