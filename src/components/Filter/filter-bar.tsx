
import { FC, useEffect } from "react"
import useIsMobile from "../../hooks/useIsMobile"
import { UseIsTablet } from "../../hooks/useIsTablet"
import CustomDropdown from "../Dropdown/custom-dropdown"
import MobileSortBar from "../Sort-Bar/mobile-sort-bar"
import { StyledSortBarContainer } from "../Sort-Bar/sort-bar.style"
import { categories, countries } from "../../constants/constants"
import { useAppSelector } from "../../store/hooks.store"


interface FilterBarrops {

}
const FilterBar: FC<FilterBarrops> = () => {

    const isMobile = useIsMobile()
    const isTablet = UseIsTablet()
    const currArticleSources = useAppSelector(state => state.filter.currArticlesSources)

    // const sourceOptions = useAppSelector(state => state.filter.filterBy.source.options)
    // const isEverything = useAppSelector(state => state.system.isEverything)

    // Send get request to api based on current local filterBy everytime filterBy change
    // useEffect(() => {
    //     // dispatch(fetchArticles(updatedFilterBy));
    //     fetchArticlesFromApi()
    // }, []);

    // const fetchArticlesFromApi = async () => {
    //     try {
    //         console.log('demo fetching from filterBar')
    //         // const res = await newsService.query(updatedFilterBy)
    //         // dispatch(setArticleList(res.articles))

    //     } catch (err) {
    //         console.log('Cannot fetch articles', err)
    //     }
    // }

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

                </StyledSortBarContainer>
            )}
            {(isMobile || isTablet) && <MobileSortBar />}
        </>



    )

}
export default FilterBar