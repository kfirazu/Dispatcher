import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
} from 'chart.js'
import { Article } from '../../models/article-interface';
import { FC, useEffect, useState } from 'react';
import { dashboardService } from '../../services/dashboard-service';
import { StyledLineChartWrapper } from './dashboard.style';
import Loader from '../Loader/loader';
import { useAppSelector } from '../../store/hooks.store';
import SkeletonAreaChart from '../skeletons/skeleton-line-chart';
import { Status } from '../../store/news/news.reducer';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
)

interface LineChartProps {
    articleList: Article[]
}

const LineChart: FC<LineChartProps> = ({ articleList }) => {
    const status = useAppSelector(state => state.news.status)
    const [articleDatesMap, setArticleDatesMap] = useState<{ [month: number]: number }>({})

    useEffect(() => {
        const articleDateMap = dashboardService.getArticlesDates(articleList)
        setArticleDatesMap(articleDateMap)
    }, [articleList])


    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false
            },
        },
        scales: {
            x: {
                grid: {
                    drawOnChartArea: false,
                    drawTicks: false,
                },
                border: {
                    display: false
                }
            },
            y: {
                grid: {
                    drawOnChartArea: false,
                    drawTicks: false,

                },
                ticks: {
                    display: false
                },
                border: {
                    display: false
                }
            },
        },
        title: {
            display: true,
            text: 'Dates',
        },
    }

    const labels = ['', '', '', '', '', '']

    const data = {
        labels: labels,
        datasets: [
            {
                label: 'Dates',
                // data: ['20', '20', '40', '30', '50'],
                data: articleDatesMap,
                backgroundColor: (context: any) => {
                    const bgColor = ['#0058B9', 'rgba(0, 185, 255, 0)']
                    if (!context.chart.chartArea) {
                        return
                    }
                    const { ctx, chartArea: { top, bottom } } = context.chart
                    const gradeintBg = ctx.createLinearGradient(0, top, 0, bottom)
                    gradeintBg.addColorStop(0, bgColor[0])
                    gradeintBg.addColorStop(1, bgColor[1])

                    return gradeintBg
                },
                borderColor: '#0058B9',
                pointBorderColor: 'transparent',
                pointColor: 'transparent',
                fill: true,
                tension: .5,
                borderWidth: 3,
            },
        ],
    };
    return (
        <StyledLineChartWrapper>
            {/* {status === Status.LOADING && <SkeletonAreaChart />} */}
                <Line
                    options={options}
                    data={data}
                >
                </Line>
        </StyledLineChartWrapper>
    )
}

export default LineChart