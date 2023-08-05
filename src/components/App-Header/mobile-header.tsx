import StyledContainer, { LogoWrapper, StyledInputContainer } from "./app-header.style"
import logo from '../../assets/icon/logo.svg'
import searchIcon from '../../assets/icon/search-icon.svg'
import notificationIcon from '../../assets/icon/notification-icon.svg'
import settingsIcon from '../../assets/icon/settings-icon.svg'
import { ChangeEvent, MouseEvent, useEffect, useState } from "react"
import { UseIsTablet } from "../../hooks/useIsTablet"
import useIsMobile from "../../hooks/useIsMobile"
import IconContainer from "./icon-container"
import RecentSearchDropdown from "../RecentSearchDropdown/recent-search-dropdown"
import { utilService } from "../../services/util.service"
import MobileInput from "../Mobile-Input/mobile-input"
import { useAppDispatch, useAppSelector } from "../../store/hooks.store"
import { setSearchQuery } from "../../store/news/filter.reducer"
import { addRecentSearch } from "../../store/news/recent-serach.reducer"
import { fetchArticlesBySearchQuery } from "../../store/thunks/fetchDataThunk"
import CustomInput from "../Input/custom-input"
import MobileRecentSearch from "../RecentSearchDropdown/mobile-recent-search"
import { setIsFirstSearch } from "../../store/news/news.reducer"

const MobileHeader = () => {

    const isMobile = useIsMobile()
    const isTablet = UseIsTablet()

    const dispatch = useAppDispatch()
    const isFirstSearch = useAppSelector(state => state.news.isFirstSearch)
    const [isFocused, setIsFocused] = useState<boolean>(false)
    const [searchTerm, setSearchTerm] = useState<string>('')

    useEffect(() => {
        if (searchTerm !== '') {
            dispatch(fetchArticlesBySearchQuery(searchTerm))
        }
    }, [searchTerm])


    const handleFocus = () => {
        setIsFocused(true)
    }

    const handleSearchQueryChange = (ev: ChangeEvent<HTMLInputElement>) => {
        const { value } = ev.target
        setSearchTerm(value)
        dispatch(setSearchQuery(value))

    }

    const debounceOnChange = utilService.debounce(handleSearchQueryChange, 700)

    const onCloseModal = () => {
        setIsFocused(false)
    }

    const handleSerachSubmit = (searchQuery: string) => {
        dispatch(setSearchQuery(searchQuery))
        const newSearchTerm = { id: utilService.makeId(), searchTerm: searchQuery }
        dispatch(addRecentSearch(newSearchTerm))
        setIsFocused(false)
        if (isFirstSearch) {
            dispatch(setIsFirstSearch())
        }

    }

    const handleBack = () => {
        setSearchTerm('')
        setIsFocused(false)
    }


    const handleSearchTermClick = (ev: MouseEvent<HTMLElement>, searchTerm: string) => {
        ev.stopPropagation()
        setSearchTerm(searchTerm)
        // dispatch(fetchArticlesBySearchQuery(searchTerm)) // FIX: should happen here but not fast enough
        onCloseModal()

    }


    return (
        <StyledContainer isMobile={isMobile} isTablet={isTablet} isFocused={isFocused}>
            {!isFocused &&
                <LogoWrapper isMobile={isMobile} isTablet={isTablet}>
                    <img src={logo} alt="" />
                </LogoWrapper>
            }
            {isMobile && !isFocused &&
                <IconContainer children={[searchIcon, settingsIcon, notificationIcon]} handleFocus={handleFocus} />
            }
            {(isMobile && isFocused) && (
                <>
                    <MobileInput
                        handleFocus={handleFocus}
                        handleSerachSubmit={handleSerachSubmit}
                        debounceOnChange={debounceOnChange}
                        handleBack={handleBack}
                        placeholder={searchTerm ? searchTerm : 'Search'}
                        searchTerm={searchTerm}
                        setSearchTerm={setSearchTerm}
                        name="search"

                    />
                    <MobileRecentSearch handleSearchTermClick={handleSearchTermClick} />
                </>

            )}
            {(isTablet && !isMobile) &&

                <StyledInputContainer>
                    <CustomInput
                        name='search'
                        id='search'
                        placeholder={searchTerm ? searchTerm : 'Search'}
                        debounceOnChange={debounceOnChange}
                        handleFocus={handleFocus}
                        label={'Text'}
                        onSubmit={handleSerachSubmit}
                        onCloseModal={onCloseModal}
                    />
                    {isFocused &&
                        <RecentSearchDropdown
                            isFocused={isFocused}
                            onCloseModal={onCloseModal}
                            handleSearchTermClick={handleSearchTermClick}
                        />
                    }
                    <IconContainer children={[settingsIcon, notificationIcon]} />
                </StyledInputContainer>


            }

        </StyledContainer>
    )
}

export default MobileHeader