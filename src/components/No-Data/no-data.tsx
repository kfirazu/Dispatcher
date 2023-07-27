import { StyledContentWrapper, StyledHeading5, StyledImage, StyledWrapper } from "./no-data.style"
import noDataImg from '../../assets/img/no-data.svg'


const NoData = () => {
    return (
        <StyledWrapper>
            <StyledContentWrapper>
                <StyledImage src={noDataImg} />
                <StyledHeading5>We couldn't find any matches for your query</StyledHeading5>
            </StyledContentWrapper>
        </StyledWrapper>
    )
}

export default NoData