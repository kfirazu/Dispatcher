import { FC } from "react"
import LineChart from "./line"
import { StyledChartHeading, StyledChartWrapper, StyledDashboardWrapper, StyledHeadingWrapper, StyledMonthListWrapper, StyledMonthName, StyledSourceListWrapper } from "./dashboard.style"
import { dashboardService } from "../../services/dashboard-service"
import SorucePercentageList from "./source-pecentage-list"
import useIsMobile from "../../hooks/useIsMobile"
import { UseIsTablet } from "../../hooks/useIsTablet"
import { useAppSelector } from "../../store/hooks.store"
import NewNoData from "../No-Data/new-no-data"
import { Status } from "../../store/news/news.reducer"
import DoughnutGraph from "./pie-chart"
import SkeletonAreaChart from "../skeletons/skeleton-line-chart"

interface DashboardProps {
}

const Dashboard: FC<DashboardProps> = () => {

    const isMobile = useIsMobile()
    const isTablet = UseIsTablet()
    const articleList = useAppSelector(state => state.news.articleList)
    const totalResults = useAppSelector(state => state.news.totalResults)
    const status = useAppSelector(state => state.news.status)

    const lineChartMonths = dashboardService.getPastSixMonth()
    return (
        <>
            {
                (!isMobile && !isTablet) &&
                <div>
                    <StyledDashboardWrapper >
                        <StyledChartWrapper noArticles={totalResults === 0}>
                            <StyledHeadingWrapper>
                                <StyledChartHeading>
                                    Sources
                                </StyledChartHeading>
                            </StyledHeadingWrapper>
                            {status === Status.LOADING && <SkeletonAreaChart />}

                            {totalResults > 0 && status !== Status.LOADING && (
                                <DoughnutGraph articleList={articleList} />
                            )}
                            {totalResults === 0 && status !== Status.LOADING && (
                                <NewNoData type='chart' />
                            )}

                            <StyledSourceListWrapper>
                                <SorucePercentageList articleList={articleList} />
                            </StyledSourceListWrapper>
                        </StyledChartWrapper>

                        <StyledChartWrapper className="no data wrapper" noArticles={totalResults === 0}>
                            <StyledHeadingWrapper>
                                <StyledChartHeading>
                                    Dates
                                </StyledChartHeading>
                            </StyledHeadingWrapper>
                            {status === Status.LOADING && <SkeletonAreaChart />}

                            {totalResults > 0 && status !== Status.LOADING && (
                                <LineChart articleList={articleList} />
                            )}
                            {totalResults === 0 && status !== Status.LOADING && (
                                <NewNoData type='chart' />
                            )}
                            <StyledMonthListWrapper>
                                {lineChartMonths.map((month: string) => (
                                    <StyledMonthName key={month}>{month}</StyledMonthName>
                                ))}
                            </StyledMonthListWrapper>
                        </StyledChartWrapper>
                    </StyledDashboardWrapper>
                </div>
            }
        </>
    )
}

export default Dashboard