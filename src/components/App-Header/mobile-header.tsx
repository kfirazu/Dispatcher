import StyledContainer, { IconsWrapper, LogoWrapper, StyledIcon, StyledUserAvatarWrapper, StyledUserName } from "./app-header.style"
import logo from '../../assets/icon/logo.svg'
import searchIcon from '../../assets/icon/search-icon.svg'
import notificationIcon from '../../assets/icon/notification-icon.svg'
import settingsIcon from '../../assets/icon/settings-icon.svg'

import { useState } from "react"
import useIsMobile from "../../hooks/useIsMobile"
import { UseIsTablet } from "../../hooks/useIsTablet"




const MobileHeader = () => {

    const isMobile = useIsMobile()
    const isTablet = UseIsTablet()

    const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false)
    const [isSettingsOpen, setisSettingsOpen] = useState<boolean>(false)
    const [isNotificationOpen, setisNotificationOpen] = useState<boolean>(false)


    return (
        <StyledContainer isMobile={isMobile} isTablet={isTablet}>
            <LogoWrapper>
                <img src={logo} alt="" />
            </LogoWrapper>
            <IconsWrapper>
                <StyledIcon src={searchIcon} />
                <StyledIcon src={settingsIcon} />
                <StyledIcon src={notificationIcon} />
                <StyledUserAvatarWrapper><StyledUserName>AG</StyledUserName></StyledUserAvatarWrapper>
            </IconsWrapper>


        </StyledContainer>
    )
}

export default MobileHeader