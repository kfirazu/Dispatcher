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
import { languages } from "../../constants/constants"

interface SortBarProps {

}


const SortBar: FC<SortBarProps> = () => {

    const isMobile = useIsMobile()
    const isTablet = UseIsTablet()

    const dispatch = useAppDispatch()
    const filterBy = useAppSelector(state => state.filter.filterBy)
    const sourceOptions = useAppSelector(state => state.filter.filterBy.source.options)
    const languageOptions = useAppSelector(state => state.filter.filterBy.language.options)

    const [updatedFilterBy, setUpdatedFilterBy] = useState<FilterBy>(filterBy)

    const sortByArr = [
        { value: 'publishedAt', title: 'Published at' },
        { value: 'popularity', title: 'Popularity' },
        { value: 'relevancy', title: 'Relevancy' }
    ]

    const sourcesArr = [
        { value: 'וואלה', title: 'וואלה! חדשות' }, { value: 'וואלה', title: 'וואלה! תרבות' },
        { value: "הארץ", title: 'הארץ' }, { value: 'ספורט 5', title: 'ספורט 5' },
        { value: '"ynet ידיעות אחרונות"', title: '"ynet ידיעות אחרונות"' }, { value: '"כלכליסט"', title: '"כלכליסט"' },
        { value: '"mako"', title: '"mako"' }, { value: '"TheMarker"', title: '"TheMarker"' },
        { value: '"ערוץ 13"', title: '"ערוץ 13"' }, { value: '"מעריב און ליין"', title: '"מעריב און ליין"' },

    ]

    const handleDropdownChange = (ev: SelectChangeEvent<unknown>) => {
        const { name, value } = ev.target
        const strValue = String(value)

        setUpdatedFilterBy((prevFilterBy) => ({
            ...prevFilterBy,
            [name]: { ...prevFilterBy[name], value: strValue },
        }))
        dispatch(updateFilterBy(updatedFilterBy))


    }

    return (
        <>
            {!isMobile && !isTablet && (

                <StyledSortBarContainer>
                    <CustomDropdown items={sortByArr} type="Sort by" handleDropdownChange={handleDropdownChange} />
                    <DateSelector />
                    <CustomDropdown items={sourceOptions} type="Sources" handleDropdownChange={handleDropdownChange} />
                    <CustomDropdown items={languages} type="Language" handleDropdownChange={handleDropdownChange} />
                </StyledSortBarContainer>
            )}
            {(isMobile || isTablet) && <MobileSortBar />}

        </>
    )
}

export default SortBar