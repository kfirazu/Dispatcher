
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

interface FilterBarrops {

}

const FilterBar: FC<FilterBarrops> = () => {

    const isMobile = useIsMobile()
    const isTablet = UseIsTablet()

    const dispatch = useAppDispatch()
    const filterBy = useAppSelector(state => state.filter.filterBy)

    const [updatedFilterBy, setUpdatedFilterBy] = useState<FilterBy>(filterBy)
    const articleList = useAppSelector(state => state.news.articleList)
    const isEverything = useAppSelector(state => state.system.isEverything)
    const [newFilterBy, setNewFilterBy] = useState<FilterBy>({
        type: {
            title: isEverything ? 'Everything' : 'Top-headlines',
            value: isEverything ? 'Everything' : 'Top-headlines',
            options: ['Everything', 'Top-Headlines']
        },
        country: { title: 'Country', value: '', options: [] },
        source: { title: 'Sources', value: '', options: [] },
        category: { title: 'Category', value: '', options: [] },
        language: { title: 'Langugaes', value: '', options: [] },
    },)

    useEffect(() => {
        dispatch(updateFilterBy(newFilterBy));
    }, [newFilterBy]);

    useEffect(() => {
        // dispatch(fetchArticles(updatedFilterBy));
        fetchArticlesFromApi()
    }, [newFilterBy]);

    const fetchArticlesFromApi = async () => {
        try {
            const res = await newsService.query(newFilterBy)
            console.log('res from filterBar', res)
            dispatch(setArticleList(res.articles))

        } catch (err) {
            console.log('Cannot fetch articles', err)
        }
    }



    // Export to constants
    const categories = [
        { value: 'business', title: 'Business' },
        { value: 'entertainment', title: 'Entertainment' },
        { value: 'general', title: 'General' },
        { value: 'health', title: 'Health' },
        { value: 'science', title: 'Science' },
        { value: 'sports', title: 'Sports' },
        { value: 'technology', title: 'Technology' }

    ]

    const sources = [
        { value: 'walla', title: 'וואלה! חדשות' }, { value: 'וואלה', title: 'וואלה! תרבות' },
        { value: "הארץ", title: 'הארץ' }, { value: 'ספורט 5', title: 'ספורט 5' },
        { value: '"ynet ידיעות אחרונות"', title: '"ynet ידיעות אחרונות"' }, { value: '"כלכליסט"', title: '"כלכליסט"' },
        { value: '"mako"', title: '"mako"' }, { value: '"TheMarker"', title: '"TheMarker"' },
        { value: '"ערוץ 13"', title: '"ערוץ 13"' }, { value: '"מעריב און ליין"', title: '"מעריב און ליין"' },

    ]

    const countries = [
        { value: 'ar', title: 'Argentina' }, { value: 'au', title: 'Austrailia' },
        { value: 'at', title: 'Austria' }, { value: 'be', title: 'Belgium' },
        { value: 'br', title: 'Brazil' }, { value: 'bg', title: 'Bulgaria' },
        { value: 'ca', title: 'Canada' }, { value: 'cn', title: 'China' },
        { value: 'co', title: 'Colombia' }, { value: 'cu', title: 'Cuba' },
        { value: 'cz', title: 'Czech Republic' }, { value: 'eg', title: 'Egypt' },
        { value: 'fr', title: 'France' }, { value: 'de', title: 'Germany' },
        { value: 'gr', title: 'Greece' }, { value: 'hk', title: 'Hong Kong' },
        { value: 'hu', title: 'Hungary' }, { value: 'in', title: 'India' },
        { value: 'id', title: 'Indonesia' }, { value: 'ie', title: 'Ireland' },
        { value: 'ik', title: 'Israel' }, { value: 'it', title: 'Italy' }

    ]

    const handleDropdownChange = (ev: SelectChangeEvent<unknown>) => {
        const { name, value } = ev.target
        const strValue = String(value)

        // setUpdatedFilterBy((prevFilterBy) => ({
        //     ...prevFilterBy,
        //     [name]: { ...prevFilterBy[name], value: strValue },
        // }))
        setNewFilterBy((prevFilterBy) => ({
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
                        items={sources}
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