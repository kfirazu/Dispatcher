import { StyledContentWrapper, StyledHeading5, StyledImage, StyledWrapper } from "./no-data.style"
import noDataImg from '../../assets/img/no-data.svg'
import DashbaordNoData from "./dashboard-no-data"
import useIsMobile from "../../hooks/useIsMobile"
import { UseIsTablet } from "../../hooks/useIsTablet"


const NoData = () => {

    const isMobile = useIsMobile()
    const isTablet = UseIsTablet()
    return (
        <StyledWrapper>
            <StyledContentWrapper>
                <StyledImage src={noDataImg} />

                <StyledHeading5>We couldn't find any matches for your query</StyledHeading5>
            </StyledContentWrapper>
            {(!isMobile && !isTablet) && (<DashbaordNoData />)}
        </StyledWrapper>
    )
}

export default NoData