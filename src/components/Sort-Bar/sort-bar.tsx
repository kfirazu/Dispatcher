import { FC, useEffect } from "react"
import useIsMobile from "../../hooks/useIsMobile"
import { UseIsTablet } from "../../hooks/useIsTablet"
import CustomDropdown from "../Dropdown/custom-dropdown"
import MobileSortBar from "./mobile-sort-bar"
import { StyledSortBarContainer } from "./sort-bar.style"
import { useAppDispatch, useAppSelector } from "../../store/hooks.store"
import { languages, sortByArr } from "../../constants/constants"
import DatePickerCmp from "../Date-Selector/date-picker-cmp"
import { clearFilter } from "../../store/news/filter.reducer"
import { Button } from "../../stories/Button"

interface SortBarProps {

}

const SortBar: FC<SortBarProps> = () => {

    const isMobile = useIsMobile()
    const isTablet = UseIsTablet()
    const dispatch = useAppDispatch()
    const everythingSources = useAppSelector(state => state.filter.everythingSources)
    const filterBy = useAppSelector(state => state.filter.filterBy)


    useEffect(() => {

    }, [filterBy])

    const onClearFilter = () => {
        dispatch(clearFilter())
    }


    return (
        <>
            {!isMobile && !isTablet && (

                <StyledSortBarContainer>
                    <CustomDropdown
                        items={sortByArr}
                        type="Sort-by"
                        name="sortBy"
                    />
                    <DatePickerCmp />
                    <CustomDropdown
                        items={everythingSources}
                        type="Source"
                        name="source"
                    />
                    <CustomDropdown
                        items={languages}
                        type="Language"
                        name="language"
                    />
                    <Button label="Clear Filters" onClick={onClearFilter} />

                </StyledSortBarContainer>
            )}
            {(isMobile || isTablet) && <MobileSortBar />}

        </>
    )
}

export default SortBar