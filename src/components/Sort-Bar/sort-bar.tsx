import { FC, useEffect, useState } from "react"
import useIsMobile from "../../hooks/useIsMobile"
import { UseIsTablet } from "../../hooks/useIsTablet"
import DateSelector from "../Date-Selector/date-selector"
import CustomDropdown from "../Dropdown/custom-dropdown"
import MobileSortBar from "./mobile-sort-bar"
import { StyledSortBarContainer } from "./sort-bar.style"
import { SelectChangeEvent } from "@mui/material"
import { FilterBy } from "../../models/filter-by"
import { useAppDispatch, useAppSelector } from "../../store/hooks.store"
import { updateFilterBy } from "../../store/news/filter.reducer"
import { newsService } from "../../services/news.service"
import { languages, sortByArr } from "../../constants/constants"
import { setArticleList } from "../../store/news/news.reducer"

interface SortBarProps {

}


const SortBar: FC<SortBarProps> = () => {

    const isMobile = useIsMobile()
    const isTablet = UseIsTablet()

    const dispatch = useAppDispatch()
    const filterBy = useAppSelector(state => state.filter.filterBy)
    const sourceOptions = useAppSelector(state => state.filter.filterBy.source.options)
    const languageOptions = useAppSelector(state => state.filter.filterBy.language.options)
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
        sortBy: { title: 'Sort-by', value: '', options: [] },


    },)

    // Updated filterBy in redux filter reducer
    useEffect(() => {
        dispatch(updateFilterBy(updatedFilterBy));
    }, [updatedFilterBy])

    // Send get request to api based on current local filterBy everytime filterBy change
    useEffect(() => {
        // dispatch(fetchArticles(updatedFilterBy));
        console.log('updatedFilterBy before fetch:', updatedFilterBy)

        fetchArticlesFromApi()
    }, [updatedFilterBy]);

    const fetchArticlesFromApi = async () => {
        try {
            const res = await newsService.query(updatedFilterBy)
            console.log(res.articles)
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
                        items={sortByArr}
                        type="Sort-by"
                        name="sortBy"
                        handleDropdownChange={handleDropdownChange}
                    />
                    <DateSelector />
                    <CustomDropdown
                        items={sourceOptions}
                        type="Source"
                        name="source"
                        handleDropdownChange={handleDropdownChange}
                    />
                    <CustomDropdown
                        items={languages}
                        type="Language"
                        name="language"
                        handleDropdownChange={handleDropdownChange}
                    />
                </StyledSortBarContainer>
            )}
            {(isMobile || isTablet) && <MobileSortBar />}

        </>
    )
}

export default SortBar