import { FC } from "react"
import { StyledMobileBlackScreen } from "../../styles/global-styles"
import { useAppDispatch } from "../../store/hooks.store"
import { setIsSideBarOpen } from "../../store/system/system.reducer"

interface BlackScreenProps {
    isSideBarOpen: boolean
}



const MobileBlackScreen: FC<BlackScreenProps> = ({ isSideBarOpen }) => {

    const dispatch = useAppDispatch()

    const onCloseSideBar = () => {
        dispatch(setIsSideBarOpen(false))
    }
    return (
        isSideBarOpen && (
            <StyledMobileBlackScreen onClick={onCloseSideBar}></StyledMobileBlackScreen>
        )
    )
}

export default MobileBlackScreen