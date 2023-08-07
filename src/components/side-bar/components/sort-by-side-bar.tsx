import { FC } from "react"
import { DropdownOption } from "../../../models/filter-by"
import { SideBarTitle, StyledContentHeading, StyledFilterItem, StyledFilterList } from "../side-bar.style"
import StyledIcon from "../../icon/icon.style"
import goBackIcon from '../../../assets/icon/go-back-icon.svg'
import { useAppSelector } from "../../../store/hooks.store"


interface SortBySideBarProps {
    children: { title: string, value: string }[] | DropdownOption[]
    onSelectSortByValue: (value: string, title: string) => void
    filterTitle: string | null
    handleBack: () => void
}

const SortBySideBar: FC<SortBySideBarProps> = ({ children, filterTitle, onSelectSortByValue, handleBack }) => {
    const isEverything = useAppSelector(state => state.system.isEverything)


    return (
        <>
            <SideBarTitle>
                <StyledIcon src={goBackIcon} width="24" height="24" onClick={handleBack} />
                <StyledContentHeading>{filterTitle}</StyledContentHeading>
            </SideBarTitle>
            <StyledFilterList>
                {isEverything
                    ? children.map((filter, idx) => (
                        <StyledFilterItem key={idx} onClick={() => { onSelectSortByValue(filter.value!, filter.title) }}>
                            {filter.title}
                        </StyledFilterItem>
                    ))
                    : <StyledFilterItem>
                        <pre style={{fontSize: "11px"}}>
                            Set type to everything to enable sorting

                        </pre>
                    </StyledFilterItem>
                }
            </StyledFilterList>
        </>

    )
}

export default SortBySideBar