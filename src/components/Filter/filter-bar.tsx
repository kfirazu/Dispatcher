import { FC, useEffect, useState } from "react"
import useIsMobile from "../../hooks/useIsMobile"
import { UseIsTablet } from "../../hooks/useIsTablet"
import CustomDropdown from "../Dropdown/custom-dropdown"
import MobileSortBar from "../Sort-Bar/mobile-sort-bar"
import { StyledContainer } from "./filter.style"
import { SelectChangeEvent } from "@mui/material"
import { FilterBy } from "../../models/filter-by"
import { useAppDispatch, useAppSelector } from "../../store/hooks.store"
import { updateFilterBy } from "../../store/news/filter.reducer"

interface FilterBarrops {
    onOpenSideBar: () => void
}

const FilterBar: FC<FilterBarrops> = ({ onOpenSideBar }) => {

    const isMobile = useIsMobile()
    const isTablet = UseIsTablet()

    const dispatch = useAppDispatch()
    const filterBy = useAppSelector(state => state.filter.filterBy)


    const [updatedFilterBy, setUpdatedFilterBy] = useState<FilterBy>(filterBy)


    useEffect(() => {
        console.log('filterBy in the store:', filterBy);
      }, [filterBy]);
    // Should accept children as props / The dropdowns type so it will be generic for changes.
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
        { value: 'וואלה', title: 'וואלה! חדשות' }, { value: 'וואלה', title: 'וואלה! תרבות' },
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

                <StyledContainer>
                    <CustomDropdown
                        items={countries}
                        name={'country'}
                        id={'country'}
                        type="Country"
                        handleChange={handleChange}

                    />
                    <CustomDropdown
                        items={categories}
                        name={'category'}
                        id={'category'}
                        type="Catrgory"
                        handleChange={handleChange}
                    />
                    <CustomDropdown
                        items={sources}
                        name={'soruce'}
                        id={'source'}
                        type="Source"
                        handleChange={handleChange}
                    />

                </StyledContainer>
            )}
            {(isMobile || isTablet) && <MobileSortBar onOpenSideBar={onOpenSideBar} />}
        </>



    )

}
export default FilterBar