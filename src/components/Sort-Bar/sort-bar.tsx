import { FC } from "react"
import useIsMobile from "../../hooks/useIsMobile"
import { UseIsTablet } from "../../hooks/useIsTablet"
import DateSelector from "../Date-Selector/date-selector"
import CustomDropdown from "../Dropdown/custom-dropdown"
import MobileSortBar from "./mobile-sort-bar"
import { StyledSortBarContainer } from "./sort-bar.style"
import {  useAppSelector } from "../../store/hooks.store"
import {  languages, sortByArr } from "../../constants/constants"

interface SortBarProps {

}

const SortBar: FC<SortBarProps> = () => {

    const isMobile = useIsMobile()
    const isTablet = UseIsTablet()
    const everythingSources = useAppSelector(state => state.filter.everythingSources)


    return (
        <>
            {!isMobile && !isTablet && (

                <StyledSortBarContainer>
                    <CustomDropdown
                        items={sortByArr}
                        type="Sort-by"
                        name="sortBy"
                    />
                    <DateSelector />
                    <CustomDropdown
                        items={everythingSources}
                        type="Source"
                        name="source"
                    />
                    <CustomDropdown
                        items={languages}
                        type="Language"
                        name="language"
                    />
                </StyledSortBarContainer>
            )}
            {(isMobile || isTablet) && <MobileSortBar />}

        </>
    )
}

export default SortBar