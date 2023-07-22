import { FC, ReactNode } from "react"
import { IconsWrapper, StyledIcon, StyledUserAvatarWrapper, StyledUserName } from "./app-header.style"
import useIsMobile from "../../hooks/useIsMobile"
import { UseIsTablet } from "../../hooks/useIsTablet"


interface IconContainerProps {
    children: string[]
}

const IconContainer: FC<IconContainerProps> = ({ children }) => {

    const isMobile = useIsMobile()
    const isTablet = UseIsTablet()
    return (
        <IconsWrapper isMobile={isMobile} isTablet={isTablet}>
            {children?.map((icon: string, idx: number) => (
                <StyledIcon src={icon} key={idx} />
            ))}
            <StyledUserAvatarWrapper isMobile={isMobile} isTablet={isTablet}>
                <StyledUserName>AG</StyledUserName>
            </StyledUserAvatarWrapper>

        </IconsWrapper>

    )
}

export default IconContainer