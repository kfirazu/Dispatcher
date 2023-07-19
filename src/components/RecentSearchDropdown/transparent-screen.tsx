import { FC } from "react"
import { StyledTransparentScreen } from "../../styles/global-styles"

interface TransparentScreenProps {
    onCloseModal: () => void
}

const TransparentScreen: FC<TransparentScreenProps> = ({ onCloseModal }) => {
    return (
        <StyledTransparentScreen onClick={onCloseModal}></StyledTransparentScreen>
    )
}

export default TransparentScreen