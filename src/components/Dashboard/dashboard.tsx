import { FC } from "react"
import { Article } from "../../models/article-interface"
import DoughnutChart from "./doughnut"
import LineChart from "./line"
import { StyledChartHeading, StyledChartWrapper, StyledDashboardWrapper, StyledHeadingWrapper, StyledMonthListWrapper, StyledMonthName, StyledSourceListWrapper } from "./dashboard.style"
import { dashboardService } from "../../services/dashboard-service"
import SorucePercentageList from "./source-pecentage-list"
import useIsMobile from "../../hooks/useIsMobile"
import { UseIsTablet } from "../../hooks/useIsTablet"
import { useAppSelector } from "../../store/hooks.store"

interface DashboardProps {

}

const Dashboard: FC<DashboardProps> = () => {

    const isMobile = useIsMobile()
    const isTablet = UseIsTablet()
    const articleList = useAppSelector(state => state.news.articleList)


    const lineChartMonths = dashboardService.getPastSixMonth()

    return (
        (!isMobile && !isTablet) &&
        <div>
            <div style={{ height: '30px' }}></div>
            <StyledDashboardWrapper>
                <StyledChartWrapper>
                    <StyledHeadingWrapper>
                        <StyledChartHeading>
                            Sources
                        </StyledChartHeading>
                    </StyledHeadingWrapper>
                    <DoughnutChart articleList={articleList} />
                    <StyledSourceListWrapper>
                        <SorucePercentageList articleList={articleList} />
                    </StyledSourceListWrapper>
                </StyledChartWrapper>

                <StyledChartWrapper>
                    <StyledHeadingWrapper>
                        <StyledChartHeading>
                            Dates
                        </StyledChartHeading>
                    </StyledHeadingWrapper>
                    <LineChart articleList={articleList} />
                    <StyledMonthListWrapper>
                        {lineChartMonths.map((month: string) => (
                            <StyledMonthName key={month}>{month}</StyledMonthName>
                        ))}
                    </StyledMonthListWrapper>
                </StyledChartWrapper>
            </StyledDashboardWrapper>
        </div>
    )
}

export default Dashboard