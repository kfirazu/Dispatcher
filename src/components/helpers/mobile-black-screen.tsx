import { FC } from "react"
import { StyledMobileBlackScreen } from "../../styles/global-styles"

interface BlackScreenProps {
    onCloseSideBar: () => void
    isSideBarOpen: boolean
}

const MobileBlackScreen: FC<BlackScreenProps> = ({ onCloseSideBar, isSideBarOpen }) => {
    return (
        isSideBarOpen && (
            <StyledMobileBlackScreen onClick={onCloseSideBar}></StyledMobileBlackScreen>
        )
    )
}

export default MobileBlackScreen