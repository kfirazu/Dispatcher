import { FC, useMemo, useState } from "react"
import { dashboardService } from "../../services/dashboard-service"
import { Article } from "../../models/article-interface"
import {
    PieChart,
    Pie,
    Cell,
    Label,
    ResponsiveContainer,
} from 'recharts';


interface PieChartProps {
    articleList: Article[]
}


const DoughnutGraph: FC<PieChartProps> = ({ articleList }) => {

    const totalSources = articleList.length;
    const [sourceList, setSourceList] = useState<{ name: string, value: number }[]>([])

    useMemo(() => {
        const sourceMap = dashboardService.getSourcePercentageListToShow(articleList)
        setSourceList(sourceMap)
    }, [articleList])



    const doughnutColors = useMemo(() => dashboardService.uniqueColors(sourceList.length),
        [sourceList.length]
    );

    return (
        <>
            <ResponsiveContainer width={170} height={170}>
                <PieChart
                    margin={{
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                    }}
                >
                    <Pie
                        data={sourceList}
                        outerRadius={'75%'}
                        innerRadius={'65%'}
                        paddingAngle={0}
                        dataKey='value'
                    >
                        <Label value={totalSources} position='center' />
                        {sourceList.map((_, index) => (
                            <Cell
                                key={`cell-${index}`}
                                fill={doughnutColors[index % doughnutColors.length]}
                            />
                        ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        </>
    )
}

export default DoughnutGraph

