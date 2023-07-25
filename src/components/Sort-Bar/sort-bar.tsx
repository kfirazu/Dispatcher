import { FC, useState } from "react"
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

interface SortBarProps {
}


const SortBar: FC<SortBarProps> = () => {

    const isMobile = useIsMobile()
    const isTablet = UseIsTablet()

    const dispatch = useAppDispatch()
    const filterBy = useAppSelector(state => state.filter.filterBy)


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

    const languageArr = [
        { value: 'ar', title: 'Arabic' },
        { value: 'de', title: 'German' },
        { value: 'en', title: 'English' },
        { value: 'es', title: 'Spanish' },
        { value: 'fr', title: 'French' },
        { value: 'it', title: 'Itilian' },
        { value: 'nl', title: 'Dutch' },
        { value: 'no', title: 'Norwegian' },
        { value: 'pt', title: 'Portuguese' },
        { value: 'ru', title: 'Russian' },
        { value: 'sv', title: 'Swedish' },
        { value: 'tr', title: 'Turkish' },
        { value: 'zh', title: 'Chinese' },
        { value: 'da', title: 'Danish' },
        { value: 'fi', title: 'Finnish' },
        { value: 'he', title: 'Hebrew' },
        { value: 'id', title: 'Indonesian' },
        { value: 'ja', title: 'Japanese' },
        { value: 'ko', title: 'Korean' },
        { value: 'ms', title: 'Malay' },

    ]

    const handleChange = (ev: SelectChangeEvent<unknown>) => {
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
                    <CustomDropdown items={sortByArr} type="Sort by" handleChange={handleChange} />
                    <DateSelector />
                    <CustomDropdown items={sourcesArr} type="Sources" handleChange={handleChange} />
                    <CustomDropdown items={languageArr} type="Language" handleChange={handleChange} />
                </StyledSortBarContainer>
            )}
            {(isMobile || isTablet) && <MobileSortBar />}

        </>
    )
}

export default SortBar