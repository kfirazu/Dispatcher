import CustomInput from "../Input/custom-input"
import StyledContainer, { LogoWrapper, StyledInputWrapper } from "./app-header.style"
import logo from '../../assets/icon/logo.svg'
import RecentSearchDropdown from "../RecentSearchDropdown/recent-search-dropdown"
import { FocusEvent, useState } from "react"
import SearchInputDropdown from "../search-Input-dropdown/search-input-dropdown"
import useIsMobile from "../../hooks/useIsMobile"
import { UseIsTablet } from "../../hooks/useIsTablet"
import MobileHeader from "./mobile-header"



const AppHeader = () => {

    const isMobile = useIsMobile()
    const isTablet = UseIsTablet()
    const [isFocused, setIsFocused] = useState<boolean>(false)
    const options = [
        { value: 'everything', name: 'Everything', },
        { value: 'top-headlines', name: 'Top Headlines', }
    ]

    const handleFocus = () => {
        setIsFocused(true)
    }

    const handleBlur = (ev: FocusEvent<HTMLInputElement>) => {
        // FIX: modal close and i cant choose term or remove a term because of on blur
        // if(isFocused && ev.target !== )
        // setTimeout(() => {

        //     setIsFocused(false)
        // }, 500)
    }
    const handleChange = () => { console.log('clicked') }

    const onCloseModal = () => {
        setIsFocused(false)
    }

    return (

        !isMobile ?
            <StyledContainer isMobile={isMobile} isTablet={isTablet}>
                < LogoWrapper >
                    <img src={logo} alt="" />
                </LogoWrapper >
                <StyledInputWrapper>
                    <CustomInput name='search' id='search' placeholder='Search' handleChange={handleChange} handleFocus={handleFocus} handleBlur={handleBlur} label={'Text'} />
                    <SearchInputDropdown id={"input-dropdown"} label={"Everything"} labelId={"input-dropdown"} items={options} />

                    {isFocused &&
                        <RecentSearchDropdown isFocused={isFocused} onCloseModal={onCloseModal} />
                    }
                </StyledInputWrapper>

            </StyledContainer >
            : <MobileHeader />
    )
}

export default AppHeader