import { FC, useEffect, useState } from "react"
import { CustomDropdownProps } from "../../models/custom-dropdown-interface"
import { StyledSortBarContainer } from "./sort-bar.style"
import CustomDropdown from "../Dropdown/custom-dropdown"
import { categories, countries, languages, sortByArr } from "../../constants/constants"
import DatePickerCmp from "../Date-Selector/date-picker-cmp"
import { useAppDispatch, useAppSelector } from "../../store/hooks.store"
import MobileSortBar from "./mobile-sort-bar"
import useIsMobile from "../../hooks/useIsMobile"
import { UseIsTablet } from "../../hooks/useIsTablet"
import { clearFilter, setIsFilterCleared } from "../../store/news/filter.reducer"
import { Button } from "../../stories/Button"

export interface FilterDropdowns extends CustomDropdownProps { }

interface FilterProps {
}

const Filter: FC<FilterProps> = () => {

    const isMobile = useIsMobile()
    const isTablet = UseIsTablet()
    const dispatch = useAppDispatch()
    const isEverything = useAppSelector(state => state.system.isEverything)
    const everythingSources = useAppSelector(state => state.filter.everythingSources)
    const currArticleSources = useAppSelector(state => state.filter.currArticlesSources)
    const filterBy = useAppSelector(state => state.filter.filterBy)


    const onClearFilter = () => {
        // setSelectedOption('')
        dispatch(clearFilter())
        // dispatch(() => setIsFilterCleared(true))
    }

    const { category, country, source } = filterBy

    const isTopHeadlinesSourceDisabled = () => {
        if (category !== '' || country !== '') {
            return true
        }
        return false
    }

    const setEverythingFiltersDisabled = () => {
        if (source === '') {
            return true
        }
        return false
    }



    const renderDropdowns = () => {
        if (isEverything) {
            return (
                <>
                    <CustomDropdown
                        items={sortByArr}
                        type="Sort-by"
                        name="sortBy"
                        onClearFilter={onClearFilter}
                        disabled={setEverythingFiltersDisabled()}


                    />
                    <DatePickerCmp disabled={setEverythingFiltersDisabled()} />
                    <CustomDropdown
                        items={everythingSources}
                        type="Source"
                        name="source"
                        onClearFilter={onClearFilter}


                    />
                    <CustomDropdown
                        items={languages}
                        type="Language"
                        name="language"
                        onClearFilter={onClearFilter}
                        disabled={setEverythingFiltersDisabled()}


                    />
                </>
            )
        }
        else {
            return (
                <>
                    <CustomDropdown
                        items={countries}
                        name={'country'}
                        id={'country'}
                        type="Country"
                        onClearFilter={onClearFilter}
                    />
                    <CustomDropdown
                        items={categories}
                        name={'category'}
                        id={'category'}
                        type="Catrgory"
                        onClearFilter={onClearFilter}


                    />
                    <CustomDropdown
                        items={currArticleSources}
                        name={'source'}
                        id={'source'}
                        type="Source"
                        onClearFilter={onClearFilter}
                        disabled={isTopHeadlinesSourceDisabled()}


                    />

                </>
            )
        }
    }


    return (
        <>
            {!isMobile && !isTablet && (

                <StyledSortBarContainer>
                    {renderDropdowns()}

                    {/* <Button label="Clear Filters" onClick={onClearFilter} /> */}
                </StyledSortBarContainer >
            )}
            {(isMobile || isTablet) && <MobileSortBar />}

        </>


    )
}

export default Filter