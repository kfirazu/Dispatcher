import { FC } from "react"
import MobileBlackScreen from "../helpers/mobile-black-screen"
import { SideBarTitle, StyledButton, StyledButtonContainer, StyledFilterItem, StyledFilterList, StyledHeading, StyledSideBarContainer, StyledValueWrapper } from "./side-bar.style"
import { useAppSelector } from "../../store/hooks.store"

interface SideBarProps {
}
const SideBar: FC<SideBarProps> = () => {

    const isSideBarOpen = useAppSelector(state => state.system.isSideBarOpen)

    const filters = [{ key: 'Search in', value: 'Everything' }, { key: 'Sources', value: 'All' },
    { key: 'Language', value: 'All' }, { key: 'Dates', value: 'All' },]

    return (
        <>
            <MobileBlackScreen isSideBarOpen={isSideBarOpen} />
            {isSideBarOpen &&
                <StyledSideBarContainer>
                    <SideBarTitle>
                        <StyledHeading>Filter</StyledHeading>
                    </SideBarTitle>
                    <StyledFilterList>
                        {filters.map((filter, idx) => (
                            <StyledFilterItem key={idx}>{filter.key}
                                <StyledValueWrapper>{filter.value}</StyledValueWrapper>
                            </StyledFilterItem>
                        ))}
                    </StyledFilterList>
                    <StyledButtonContainer>
                        <StyledButton>VIEW RESULTS</StyledButton>

                    </StyledButtonContainer>
                </StyledSideBarContainer>
            }
        </>
    )
}

export default SideBar

