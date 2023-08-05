
import {
    Chart as ChartJS, ArcElement, Tooltip, Legend
} from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);
import { Doughnut } from 'react-chartjs-2'
import { Article } from '../../models/article-interface';
import { FC, useEffect, useMemo, useRef, useState } from 'react';
import { SourceCount, dashboardService } from '../../services/dashboard-service';
import { StyledDoughnutWrapper } from './dashboard.style';
import Loader from '../Loader/loader';

interface DoughnutProps {
    articleList: Article[]
}

const DoughnutChart: FC<DoughnutProps> = ({ articleList }) => {

    const [sourcePercentage, setSourcePersentage] = useState<number[]>([])
    const [sourceCount, setSourceCount] = useState<SourceCount>({})
    const [isValidData, setIsValidData] = useState<boolean>(false)


    const [isChartInitialized, setChartInitialized] = useState(false); // New state variable
    const chartRef = useRef<any>(null)


    useMemo(async () => {
        const sourceCountArr = dashboardService.getSourceCount(articleList)
        const sourcePercentageArr = dashboardService.calcSourcePercentage(articleList)
        setSourcePersentage(sourcePercentageArr)
        setSourceCount(sourceCountArr)
        if (sourceCountArr && sourcePercentageArr!.length > 0) {
            setIsValidData(true)
        }
    }, [articleList])

    useEffect(() => {
        // if (!isChartInitialized) {
            // handleChartUpdate(chartRef);
            setChartInitialized(true);
        // }
    }, [articleList, isChartInitialized]);

    const data = {
        labels: isValidData ? Object.keys(sourceCount!) : [],
        datasets: [{
            label: '',
            data: isValidData ? sourcePercentage : [],
            backgroundColor: ['#DDF3FE', '#FF9800', '#030035', '#E8E8E8', '#343A6E'],
            borderColor: ['none'],
            borderWidth: 0

        }]
    }

    const handleChartUpdate = (chart: any) => {
        if (!chartRef.current || sourcePercentage.length === 0) return;

        // if (sourcePercentage.length > 0) {
            let sliceThicknessPixel = Object.keys(sourceCount).map(() => 320);
            const meta = chart.chart.getDatasetMeta(0);
            sliceThicknessPixel.forEach((thickness, idx) => {
                if (meta.data[idx]) {
                    meta.data[idx].outerRadius = (chart.chart.chartArea.width / thickness) * 100;
                }
            });

            const ctx = chart.chart.ctx;
            ctx.save();
            ctx.font = 'regular 12px sans-serif';
            ctx.fillStyle = '#030035';
            ctx.textAlign = 'center';
            ctx.baseLine = 'middle';
            ctx.borderWidth = '120px';
            ctx.fillText(articleList.length, meta.data[0].x, meta.data[0].y);
        }


    // };
    const options = useMemo(() => ({
        responsive: true,
        maintainAspectRatio: false,
        title: {
            display: true,
            text: 'Sources',
        },
        plugins: {
            tooltip: {
                callbacks: {
                    label: (context: any) => {
                        const label = context.label || '';
                        const value = context.parsed || 0;
                        const percentage = sourcePercentage[context.dataIndex] || 0;
                        return `${label}: ${percentage.toFixed(1)}%`;
                    },
                },
            },
            legend: {
                display: false,
            },
            layout: {
                padding: 30,
            },
        },
        animation: {
            onComplete: (chart: any) => handleChartUpdate(chart),
        },
    }), [sourcePercentage]);

    return (
        <StyledDoughnutWrapper >
            {isValidData ?
                <Doughnut
                    options={options}
                    data={data}
                    ref={(ref) => {
                        chartRef.current = ref
                    }}
                // plugins={[textCenter, sliceThickness]}
                >

                </Doughnut>
                :
                <Loader />
            }
        </StyledDoughnutWrapper>

    )
}
export default DoughnutChart