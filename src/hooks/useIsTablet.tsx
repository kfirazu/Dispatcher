import { useMediaQuery } from "@mui/material"


export const UseIsTablet = () => {
    const isTablet = useMediaQuery('(max-width: 768px)')

    return isTablet
}