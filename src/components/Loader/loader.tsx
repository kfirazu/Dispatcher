import { CircularProgress } from "@mui/material"
import { StyledLoaderContainer } from "./loader.style"


const Loader = () => {
    return (
        <StyledLoaderContainer>
            <CircularProgress />
        </StyledLoaderContainer>
    )
}

export default Loader