import { StyledChartHeading, StyledChartWrapper, StyledDashboardWrapper, StyledHeadingWrapper } from "../Dashboard/dashboard.style"
import { DashboardImageWrapper, StyledHeading5, StyledImage } from "./no-data.style"
import dashboardNoDataImg from '../../assets/img/dashboard-no-data.png'


const DashbaordNoData = () => {
    return (
        <StyledDashboardWrapper>
            <StyledChartWrapper>
                <StyledHeadingWrapper>
                    <StyledChartHeading>
                        Sources
                    </StyledChartHeading>
                </StyledHeadingWrapper>
                <DashboardImageWrapper>
                    <StyledImage src={dashboardNoDataImg} />
                    <StyledHeading5>No data to display</StyledHeading5>
                </DashboardImageWrapper>
            </StyledChartWrapper>

            <StyledChartWrapper>
                <StyledHeadingWrapper>
                    <StyledChartHeading>
                        Dates
                    </StyledChartHeading>
                </StyledHeadingWrapper>
                <DashboardImageWrapper>
                    <StyledImage src={dashboardNoDataImg} />
                    <StyledHeading5>No data to display</StyledHeading5>

                </DashboardImageWrapper>
            </StyledChartWrapper>


        </StyledDashboardWrapper>

    )
}

export default DashbaordNoData