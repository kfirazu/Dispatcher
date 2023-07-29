
import { FC, useEffect, useState } from "react"
import useIsMobile from "../../hooks/useIsMobile"
import { UseIsTablet } from "../../hooks/useIsTablet"
import CustomDropdown from "../Dropdown/custom-dropdown"
import MobileSortBar from "../Sort-Bar/mobile-sort-bar"
import { SelectChangeEvent } from "@mui/material"
import { FilterBy } from "../../models/filter-by"
import { useAppDispatch, useAppSelector } from "../../store/hooks.store"
import { StyledSortBarContainer } from "../Sort-Bar/sort-bar.style"
import { newsService } from "../../services/news.service"
import { setArticleList, updateArticleList } from "../../store/news/news.reducer"
import { fetchArticles } from "../../store/thunks/fetchDataThunk"
import { updateFilterBy } from "../../store/news/filter.reducer"
import { categories, countries } from "../../constants/constants"

interface FilterBarrops {

}

const FilterBar: FC<FilterBarrops> = () => {

    const isMobile = useIsMobile()
    const isTablet = UseIsTablet()

    const dispatch = useAppDispatch()
    const filterBy = useAppSelector(state => state.filter.filterBy)
    const sourceOptions = useAppSelector(state => state.filter.filterBy.source.options)
    const countryOptions = useAppSelector(state => state.filter.filterBy.country.options)
    const articleList = useAppSelector(state => state.news.articleList)
    const isEverything = useAppSelector(state => state.system.isEverything)
    const [updatedFilterBy, setUpdatedFilterBy] = useState<FilterBy>({
        type: {
            title: isEverything ? 'Everything' : 'Top-headlines',
            value: isEverything ? 'Everything' : 'Top-headlines',
            options: [
                { value: 'Everything', title: 'Everything', },
                { value: 'Top-headlines', title: 'Top Headlines', }]
        },
        country: { title: 'Country', value: '', options: [] },
        source: { title: 'Sources', value: '', options: [] },
        category: { title: 'Category', value: '', options: [] },
        language: { title: 'Langugaes', value: '', options: [] },
    },)

    // Updated filterBy in redux filter reducer
    useEffect(() => {
        dispatch(updateFilterBy(updatedFilterBy));
        console.log('updatedFilterBy:', updatedFilterBy)

    }, [updatedFilterBy]);

    // Send get request to api based on current local filterBy everytime filterBy change
    useEffect(() => {
        // dispatch(fetchArticles(updatedFilterBy));
        fetchArticlesFromApi()
    }, [updatedFilterBy]);

    const fetchArticlesFromApi = async () => {
        try {
            const res = await newsService.query(updatedFilterBy)
            console.log('res from filter bar:', res)
            dispatch(setArticleList(res.articles))

        } catch (err) {
            console.log('Cannot fetch articles', err)
        }
    }

    // Updates local filterBy on dropdown change
    const handleDropdownChange = (ev: SelectChangeEvent<unknown>) => {
        const { name, value } = ev.target
        const strValue = String(value)

        setUpdatedFilterBy((prevFilterBy) => ({
            ...prevFilterBy,
            [name]: { ...prevFilterBy[name], value: strValue, title: strValue },
        }))
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
                        handleDropdownChange={handleDropdownChange}

                    />
                    <CustomDropdown
                        items={categories}
                        name={'category'}
                        id={'category'}
                        type="Catrgory"
                        handleDropdownChange={handleDropdownChange}
                    />
                    <CustomDropdown
                        items={sourceOptions}
                        name={'source'}
                        id={'source'}
                        type="Source"
                        handleDropdownChange={handleDropdownChange}
                    />

                </StyledSortBarContainer>
            )}
            {(isMobile || isTablet) && <MobileSortBar />}
        </>



    )

}
export default FilterBar