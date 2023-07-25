import CustomInput from "../Input/custom-input"
import StyledContainer, { LogoWrapper, StyledInputWrapper } from "./app-header.style"
import logo from '../../assets/icon/logo.svg'
import RecentSearchDropdown from "../RecentSearchDropdown/recent-search-dropdown"
import { useState } from "react"
import SearchInputDropdown from "../search-Input-dropdown/search-input-dropdown"
import useIsMobile from "../../hooks/useIsMobile"
import { UseIsTablet } from "../../hooks/useIsTablet"
import MobileHeader from "./mobile-header"
import { utilService } from "../../services/util.service"
import { useAppDispatch, useAppSelector } from "../../store/hooks.store"
import { updateSearchQuery } from "../../store/news/filter.reducer"



const AppHeader = () => {

    const isMobile = useIsMobile()
    const isTablet = UseIsTablet()
    const dispatch = useAppDispatch()
    const searchQuery = useAppSelector(state => state.filter.searchQuery)
    const [searchTerm, setSearchTerm] = useState('')
    const [isFocused, setIsFocused] = useState<boolean>(false)


    const options = [
        { value: 'everything', title: 'Everything', },
        { value: 'top-headlines', title: 'Top Headlines', }
    ]

    const handleFocus = () => {
        setIsFocused(true)
    }

    const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = ev.target
        setSearchTerm(value)
        dispatch(updateSearchQuery(value))

    }

    const debounceOnChange = utilService.debounce(handleChange, 500)

    const onCloseModal = () => {
        setIsFocused(false)
    }

    return (
        <>
            {!isMobile && !isTablet && (
                <StyledContainer isMobile={isMobile} isTablet={isTablet}>
                    <LogoWrapper isMobile={isMobile} isTablet={isTablet}>
                        <img src={logo} alt="" />
                    </LogoWrapper>
                    <StyledInputWrapper>
                        <CustomInput name='search' id='search' placeholder={searchTerm ? searchTerm : 'Search'} debounceOnChange={debounceOnChange} handleFocus={handleFocus} label={'Text'} />
                        <SearchInputDropdown id={"input-dropdown"} label={"Everything"} labelId={"input-dropdown"} items={options} />

                        {isFocused &&
                            <RecentSearchDropdown isFocused={isFocused} onCloseModal={onCloseModal} />
                        }
                    </StyledInputWrapper>
                </StyledContainer>
            )}

            {(isMobile || isTablet) && <MobileHeader />}
        </>
    )
}

export default AppHeader
