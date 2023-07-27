
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);
import { Doughnut } from 'react-chartjs-2'
import { Article } from '../../models/article-interface';
import { FC, useMemo, useState } from 'react';
import { SourceCount, dashboardService } from '../../services/dashboard-service';
import { StyledDoughnutWrapper } from './dashboard.style';

interface DoughnutProps {
    articleList: Article[]
}

const DoughnutChart: FC<DoughnutProps> = ({ articleList }) => {

    const [sourcePercentage, setSourcePersentage] = useState<number[]>([])
    const [sourceCount, setSourceCount] = useState<SourceCount>({})
    const [isValidData, setIsValidData] = useState<boolean>(false)



    useMemo(() => {
        const sourceCountArr = dashboardService.getSourceCount(articleList)
        const sourcePercentageArr = dashboardService.calcSourcePercentage(articleList)
        setSourcePersentage(sourcePercentageArr)
        setSourceCount(sourceCountArr)
        if (sourceCountArr && sourcePercentageArr!.length > 0) {
            setIsValidData(true)
        }
    }, [articleList])

    const data = {
        labels: isValidData ? Object.keys(sourceCount!) : [],
        datasets: [{
            label: 'Poll',
            data: isValidData ? sourcePercentage : [],
            backgroundColor: ['#DDF3FE', '#FF9800', '#030035', '#E8E8E8', '#343A6E'],
            borderColor: ['none'],
            borderWidth: 0

        }]
    }

    const textCenter = {
        id: 'textCenter',
        beforeDatasetsDraw(chart: any) {
            if (sourcePercentage.length > 0) {
                const { ctx } = chart
                const meta = chart.getDatasetMeta(0)
                ctx.save()
                ctx.font = 'regular 12px sans-serif'
                ctx.fillStyle = '#030035'
                ctx.textAlign = 'center'
                ctx.baseLine = 'middle'
                ctx.borderWidth = '120px'
                ctx.fillText(articleList.length, meta.data[0].x, meta.data[0].y)
            }
        }
    }

    const sliceThickness = {
        id: 'sliceThickness',
        beforeDraw(chart: any) {
            if (sourcePercentage.length > 0) {
                let sliceThicknessPixel = Object.keys(sourceCount).map(() => 320)
                const meta = chart.getDatasetMeta(0)
                sliceThicknessPixel.forEach((thickness, idx) => {
                    return meta.data[idx].outerRadius = (chart.chartArea.width / thickness) * 100

                })
            }
        }
    }
    const options = {
        responsive: true,
        title: {
            display: true,
            text: 'Sources'
        },
        plugins: {
            legend: {
                display: false
            },
            layout: {
                padding: 30,
            }
        },

    }

    return (
        <StyledDoughnutWrapper >
            {isValidData ?
                <Doughnut
                    options={options}
                    data={data}
                    plugins={[textCenter, sliceThickness]}
                >

                </Doughnut>
                : <div>Loading...</div>}
        </StyledDoughnutWrapper>

    )
}
export default DoughnutChart