import StyledContainer, { LogoWrapper, StyledInputContainer } from "./app-header.style"
import logo from '../../assets/icon/logo.svg'
import searchIcon from '../../assets/icon/search-icon.svg'
import notificationIcon from '../../assets/icon/notification-icon.svg'
import settingsIcon from '../../assets/icon/settings-icon.svg'
import { useState } from "react"
import { UseIsTablet } from "../../hooks/useIsTablet"
import useIsMobile from "../../hooks/useIsMobile"
import IconContainer from "./icon-container"
import CustomInput from "../Input/custom-input"
import RecentSearchDropdown from "../RecentSearchDropdown/recent-search-dropdown"

const MobileHeader = () => {

    const isMobile = useIsMobile()
    const isTablet = UseIsTablet()

    const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false)
    const [isSettingsOpen, setisSettingsOpen] = useState<boolean>(false)
    const [isNotificationOpen, setisNotificationOpen] = useState<boolean>(false)
    const [isFocused, setIsFocused] = useState<boolean>(false)


    const handleFocus = () => {
        setIsFocused(true)
    }

    const handleChange = () => { console.log('clicked') }

    const onCloseModal = () => {
        setIsFocused(false)
    }


    return (
        <StyledContainer isMobile={isMobile} isTablet={isTablet}>
            <LogoWrapper isMobile={isMobile} isTablet={isTablet}>
                <img src={logo} alt="" />
            </LogoWrapper>
            {isMobile &&
                <IconContainer children={[searchIcon, settingsIcon, notificationIcon]} />
            }
            {isTablet && !isMobile &&
                
                    <StyledInputContainer>
                        <CustomInput name='search' id='search' placeholder='Search' handleChange={handleChange} handleFocus={handleFocus} label={'Text'} />
                        {isFocused &&
                            <RecentSearchDropdown isFocused={isFocused} onCloseModal={onCloseModal} />
                        }
                        <IconContainer children={[settingsIcon, notificationIcon]} />
                    </StyledInputContainer>
                
                
            }

        </StyledContainer>
    )
}

export default MobileHeader