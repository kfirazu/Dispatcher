import CustomInput from "../Input/custom-input"
import StyledContainer, { LogoWrapper, StyledInputWrapper } from "./app-header.style"
import logo from '../../assets/icon/logo.svg'
import RecentSearchDropdown from "../RecentSearchDropdown/recent-search-dropdown"
import { ChangeEvent, useEffect, useState } from "react"
import SearchInputDropdown from "../search-Input-dropdown/search-input-dropdown"
import useIsMobile from "../../hooks/useIsMobile"
import { UseIsTablet } from "../../hooks/useIsTablet"
import MobileHeader from "./mobile-header"
import { utilService } from "../../services/util.service"
import { useAppDispatch, useAppSelector } from "../../store/hooks.store"
import { updateFilterBy, setSearchQuery } from "../../store/news/filter.reducer"
import { SelectChangeEvent } from "@mui/material"
import { FilterBy } from "../../models/filter-by"
import { newsService } from "../../services/news.service"
import { fetchArticlesBySearchQuery } from "../../store/thunks/fetchDataThunk"
import { addRecentSearch } from "../../store/news/recent-serach.reducer"
import { setIsEverything } from "../../store/system/system.reducer"



const AppHeader = () => {

    const isMobile = useIsMobile()
    const isTablet = UseIsTablet()

    const dispatch = useAppDispatch()
    const searchQuery = useAppSelector(state => state.filter.searchQuery)
    const isEverything = useAppSelector(state => state.system.isEverything)
    const filterBy = useAppSelector(state => state.filter.filterBy)
    const [searchTerm, setSearchTerm] = useState('')
    const [isFocused, setIsFocused] = useState<boolean>(false)
    const [updatedFilterBy, setUpdatedFilterBy] = useState<FilterBy>(filterBy)

    useEffect(() => {
        dispatch(fetchArticlesBySearchQuery(searchTerm))
    }, [dispatch, searchTerm])


    const options = [
        { value: 'Everything', title: 'Everything', },
        { value: 'Top-headlines', title: 'Top Headlines', }
    ]

    const handleSearchQueryChange = (ev: ChangeEvent<HTMLInputElement>) => {
        const { value } = ev.target
        setSearchTerm(value)
        dispatch(setSearchQuery(value))

    }

    const debounceOnChange = utilService.debounce(handleSearchQueryChange, 500)

    const onCloseModal = () => {
        setIsFocused(false)
    }
    const handleDropdownChange = (ev: SelectChangeEvent<unknown>) => {
        const { name, value } = ev.target
        const strValue = String(value)

        setUpdatedFilterBy((prevFilterBy) => ({
            ...prevFilterBy,
            [name]: { ...prevFilterBy[name], value: strValue, title: strValue },
        }))
        dispatch(updateFilterBy(updatedFilterBy))
        dispatch(setIsEverything(!isEverything))

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
                            items={options}
                            placeholder={isEverything ? "Everything" : "Top-headlines"}
                            handleDropdownChange={handleDropdownChange}
                        />

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
