import CustomInput from "../Input/custom-input"
import StyledContainer, { LogoWrapper, StyledInputWrapper } from "./app-header.style"
import logo from '../../assets/icon/logo.svg'
import RecentSearchDropdown from "../RecentSearchDropdown/recent-search-dropdown"
import { ChangeEvent, FC, MouseEvent, useEffect, useState } from "react"
import SearchInputDropdown from "../search-Input-dropdown/search-input-dropdown"
import useIsMobile from "../../hooks/useIsMobile"
import { UseIsTablet } from "../../hooks/useIsTablet"
import MobileHeader from "./mobile-header"
import { utilService } from "../../services/util.service"
import { useAppDispatch, useAppSelector } from "../../store/hooks.store"
import { setSearchQuery } from "../../store/news/filter.reducer"
import { fetchArticlesBySearchQuery } from "../../store/thunks/fetchDataThunk"
import { addRecentSearch } from "../../store/news/recent-serach.reducer"
import { searchInOptions } from "../../constants/constants"

interface AppHeaderProps {

}
const AppHeader: FC<AppHeaderProps> = () => {

    const isMobile = useIsMobile()
    const isTablet = UseIsTablet()
    const dispatch = useAppDispatch()
    const searchQuery = useAppSelector(state => state.filter.searchQuery)
    const isEverything = useAppSelector(state => state.system.isEverything)
    const [searchTerm, setSearchTerm] = useState('')
    const [isFocused, setIsFocused] = useState<boolean>(false)

    useEffect(() => {
        dispatch(fetchArticlesBySearchQuery(searchTerm))
    }, [searchTerm])



    const handleSearchQueryChange = (ev: ChangeEvent<HTMLInputElement>) => {
        const { value } = ev.target
        setSearchTerm(value)
        dispatch(setSearchQuery(value))

    }
    const debounceOnChange = utilService.debounce(handleSearchQueryChange, 500)

    const onCloseModal = () => {
        setIsFocused(false)
    }


    const handleSerachSubmit = (searchQuery: string) => {
        dispatch(setSearchQuery(searchQuery))
        const newSearchTerm = { id: utilService.makeId(), searchTerm: searchQuery }
        dispatch(addRecentSearch(newSearchTerm))
        setIsFocused(false)

    }

    const handleFocus = () => {
        setIsFocused(true)
    }

    const handleSearchTermClick = (ev: MouseEvent<HTMLElement>, searchTerm: string) => {
        ev.stopPropagation()
        setSearchTerm(searchTerm)
        onCloseModal()

    }

    return (
        <>
            {!isMobile && !isTablet && (
                <StyledContainer isMobile={isMobile} isTablet={isTablet}>
                    <LogoWrapper isMobile={isMobile} isTablet={isTablet}>
                        <img src={logo} alt="" />
                    </LogoWrapper>
                    <StyledInputWrapper>
                        <CustomInput
                            name='search'
                            id='search'
                            placeholder={searchTerm ? searchTerm : 'Search'}
                            debounceOnChange={debounceOnChange}
                            handleFocus={handleFocus}
                            label={'Text'}
                            onSubmit={handleSerachSubmit}
                        />
                        <SearchInputDropdown
                            id={"input-dropdown"}
                            label={"Everything"}
                            name="type"
                            labelId={"input-dropdown"}
                            items={searchInOptions}
                            placeholder={isEverything ? "Everything" : "Top-headlines"}
                        />

                        {isFocused &&
                            <RecentSearchDropdown
                                isFocused={isFocused}
                                onCloseModal={onCloseModal}
                                handleSearchTermClick={handleSearchTermClick}
                            />
                        }
                    </StyledInputWrapper>
                </StyledContainer>
            )}

            {(isMobile || isTablet) && <MobileHeader />}
        </>
    )
}

export default AppHeader
