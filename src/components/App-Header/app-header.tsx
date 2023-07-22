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

    const handleChange = () => { console.log('clicked') }

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
                        <CustomInput name='search' id='search' placeholder='Search' handleChange={handleChange} handleFocus={handleFocus}  label={'Text'} />
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


{/* <StyledContainer isMobile={isMobile} isTablet={isTablet}>
< LogoWrapper isMobile={isMobile} isTablet={isTablet}>
    <img src={logo} alt="" />
</LogoWrapper >
<StyledInputWrapper>
    <CustomInput name='search' id='search' placeholder='Search' handleChange={handleChange} handleFocus={handleFocus} handleBlur={handleBlur} label={'Text'} />
    <SearchInputDropdown id={"input-dropdown"} label={"Everything"} labelId={"input-dropdown"} items={options} />

    {isFocused &&
        <RecentSearchDropdown isFocused={isFocused} onCloseModal={onCloseModal} />
    }
</StyledInputWrapper>

</StyledContainer >} */}