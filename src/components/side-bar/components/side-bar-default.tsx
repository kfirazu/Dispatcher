import { FC, useEffect } from "react"
import { useAppSelector } from "../../../store/hooks.store"
import { Everything, TopHeadlines } from "../side-bar.types"
import { SideBarTitle, StyledFilterItem, StyledFilterList, StyledHeading, StyledValueWrapper } from "../side-bar.style"
import MobileDatePicker from "../../Date-Selector/mobile-date-picker";

interface SelectedValues {
    [key: string]: string | null;
}


interface SideBarDefault {
    handleSelectFilterCategory: (filter: string) => void
    selectedCategory: string | null
    selectedValues: SelectedValues
    selectedCategoryValue: string | null
    onSelectDateFilter: () => void
    setEverythingFiltersDisabled: () => boolean

}

const SideBarDefault: FC<SideBarDefault> = ({ handleSelectFilterCategory, selectedCategory, onSelectDateFilter, selectedCategoryValue, setEverythingFiltersDisabled }) => {

    const isEverything = useAppSelector(state => state.system.isEverything)
    const isMobileDatePickerOpen = useAppSelector(state => state.filter.isMobileDatePickerOpen)
    const everythingFilters = Object.values(Everything)
    const topHeadlinesFilters = Object.values(TopHeadlines)

    useEffect(() => { console.log('selectedCategoryValue:', selectedCategoryValue) }, [selectedCategoryValue])
    useEffect(() => { console.log('selectedCategory sideBarDefault:', selectedCategory) }, [])

    return (
        <>
            { isMobileDatePickerOpen && <MobileDatePicker disabled={setEverythingFiltersDisabled()} />}
            <SideBarTitle>
                <StyledHeading>{selectedCategory ? selectedCategory : 'FILTER'}</StyledHeading>
            </SideBarTitle>
            <StyledFilterList>

                {isEverything
                    ?
                    everythingFilters.map((filter, idx) => (
                        <StyledFilterItem key={idx} onClick={() => handleSelectFilterCategory(filter)}>{filter}
                            <StyledValueWrapper>
                                {/* {selectedCategory === filter ? (selectedCategoryValue) : 'All'} */}
                            </StyledValueWrapper>
                        </StyledFilterItem>
                    ))
                    :
                    topHeadlinesFilters.map((filter, idx) => {
                        return <StyledFilterItem key={idx} onClick={() => handleSelectFilterCategory(filter)}>{filter}

                            <StyledValueWrapper>
                                {/* {selectedCategory === filter ? (selectedCategoryValue) : 'All'} */}
                            </StyledValueWrapper>
                        </StyledFilterItem>
                    })
                }
            </StyledFilterList>
        </>

    )
}

export default SideBarDefault
