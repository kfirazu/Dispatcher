import { FC } from "react"
import StyledIcon from "../../icon/icon.style"
import { SideBarTitle, StyledContentHeading, StyledFilterItem, StyledFilterList } from "../side-bar.style"
import goBackIcon from '../../../assets/icon/go-back-icon.svg'
import { DropdownOption } from "../../../models/filter-by"


interface SideBarContentProps {
    children: { title: string, value: string }[] | DropdownOption[]
    onSelectCategoryValue: (value: string, title: string) => void
    filterTitle: string | null
    handleBack: () => void

}

const SideBarContent: FC<SideBarContentProps> = ({ children, filterTitle, onSelectCategoryValue, handleBack }) => {
    return (
        <>
            <SideBarTitle>
                <StyledIcon src={goBackIcon} width="24" height="24" onClick={handleBack} />
                <StyledContentHeading>{filterTitle}</StyledContentHeading>
            </SideBarTitle>
            <StyledFilterList>
                {children.map((filter, idx) => (
                    <StyledFilterItem key={idx} onClick={() => { onSelectCategoryValue(filter.value!, filter.title) }}>{filter.title}

                    </StyledFilterItem>
                ))
                }
            </StyledFilterList>
        </>
    )
}

export default SideBarContent


