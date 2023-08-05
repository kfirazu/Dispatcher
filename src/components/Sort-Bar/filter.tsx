import { FC, useEffect } from "react"
import { CustomDropdownProps } from "../../models/custom-dropdown-interface"
import { StyledSortBarContainer } from "./sort-bar.style"
import CustomDropdown from "../Dropdown/custom-dropdown"
import { categories, countries, languages, sortByArr } from "../../constants/constants"
import DatePickerCmp from "../Date-Selector/date-picker-cmp"
import { useAppDispatch, useAppSelector } from "../../store/hooks.store"
import MobileSortBar from "./mobile-sort-bar"
import useIsMobile from "../../hooks/useIsMobile"
import { UseIsTablet } from "../../hooks/useIsTablet"
import { clearFilter } from "../../store/news/filter.reducer"
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

    useEffect(() => {
        console.log('RENDER FROM FILTER COMPONENT!')
    }, [everythingSources])

    const onClearFilter = () => {
        dispatch(clearFilter())
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

                    />
                    <DatePickerCmp />
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

                    <Button label="Clear Filters" onClick={onClearFilter} />
                </StyledSortBarContainer >
            )}
            {(isMobile || isTablet) && <MobileSortBar />}

        </>


    )
}

export default Filter