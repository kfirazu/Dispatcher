import { StyledContentWrapper, StyledHeading5, StyledImage, StyledWrapper } from "./no-data.style"
import noDataImg from '../../assets/img/no-data.svg'
import DashbaordNoData from "./dashboard-no-data"
import useIsMobile from "../../hooks/useIsMobile"
import { UseIsTablet } from "../../hooks/useIsTablet"
import SortBar from "../Sort-Bar/sort-bar"
import UseIsEverything from "../../hooks/useIsEverything"
import FilterBar from "../Filter/filter-bar"


const NoData = () => {

    const isMobile = useIsMobile()
    const isTablet = UseIsTablet()
    const [isEverything, toggleIsEverything] = UseIsEverything()
    return (
        <StyledWrapper>
            <div style={{ display: 'grid', gridTemplateRows: '1fr 7fr' }}>
                {isEverything ? <SortBar /> : <FilterBar />}

                <StyledContentWrapper>
                    <StyledImage src={noDataImg} />

                    <StyledHeading5>We couldn't find any matches for your query</StyledHeading5>
                </StyledContentWrapper>
            </div>
            {(!isMobile && !isTablet) && (<DashbaordNoData />)}
        </StyledWrapper>
    )
}

export default NoData