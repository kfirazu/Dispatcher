
import { FC, useEffect } from "react"
import useIsMobile from "../../hooks/useIsMobile"
import { UseIsTablet } from "../../hooks/useIsTablet"
import CustomDropdown from "../Dropdown/custom-dropdown"
import MobileSortBar from "../Sort-Bar/mobile-sort-bar"
import { StyledSortBarContainer } from "../Sort-Bar/sort-bar.style"
import { categories, countries } from "../../constants/constants"
import { useAppDispatch, useAppSelector } from "../../store/hooks.store"
import { Button } from "../../stories/Button"
import { clearFilter } from "../../store/news/filter.reducer"


interface FilterBarrops {

}
const FilterBar: FC<FilterBarrops> = () => {

    const isMobile = useIsMobile()
    const isTablet = UseIsTablet()
    const dispatch = useAppDispatch()
    const currArticleSources = useAppSelector(state => state.filter.currArticlesSources)
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
                        items={countries}
                        name={'country'}
                        id={'country'}
                        type="Country"

                    />
                    <CustomDropdown
                        items={categories}
                        name={'category'}
                        id={'category'}
                        type="Catrgory"
                    />
                    <CustomDropdown
                        items={currArticleSources}
                        name={'source'}
                        id={'source'}
                        type="Source"
                    />
                    <Button label="Clear Filters" onClick={onClearFilter} />

                </StyledSortBarContainer>
            )}
            {(isMobile || isTablet) && <MobileSortBar />}
        </>



    )

}
export default FilterBar