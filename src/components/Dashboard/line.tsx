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
import { FC, useEffect } from 'react';
import { dashboardService } from '../../services/dashboard-service';
import { StyledLineChartWrapper } from './dashboard.style';

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

    useEffect(() => {
        dashboardService.getArticlesDates(articleList)
    }, [])

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

    const labels = ['', '', '', '', ''];

    const data = {
        labels: labels,
        datasets: [
            {
                label: 'Dates',
                data: ['20', '20', '40', '30', '50'],
                backgroundColor: (context: any) => {
                    const bgColor = ['#0058B9', 'rgba(0, 185, 255, 0)']
                    if (!context.chart.chartArea) {
                        return
                    }
                    const { ctx, data, chartArea: { top, bottom } } = context.chart
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
            <Line 
                options={options}
                data={data}
            >
            </Line>
        </StyledLineChartWrapper>
    )
}

export default LineChart