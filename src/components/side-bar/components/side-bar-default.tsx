import { FC } from "react"
import { useAppSelector } from "../../../store/hooks.store"
import { Everything, TopHeadlines } from "../side-bar.types"
import { SideBarTitle, StyledFilterItem, StyledFilterList, StyledHeading, StyledValueWrapper } from "../side-bar.style"

interface SelectedValues {
    [key: string]: string | null;
}


interface SideBarDefault {
    handleSelectFilterCategory: (filter: string) => void
    selectedCategory: string | null
    selectedValues: SelectedValues
    selectedCategoryValue: string | null

}

const SideBarDefault: FC<SideBarDefault> = ({ handleSelectFilterCategory, selectedCategory }) => {

    const isEverything = useAppSelector(state => state.system.isEverything)
    const everythingFilters = Object.values(Everything)
    const topHeadlinesFilters = Object.values(TopHeadlines)
    return (
        <>
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
