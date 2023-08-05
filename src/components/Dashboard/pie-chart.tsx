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
import { Status } from "../../store/news/news.reducer";
import Loader from "../Loader/loader";
import { useAppSelector } from "../../store/hooks.store";


interface PieChartProps {
    articleList: Article[]
}


const DoughnutGraph: FC<PieChartProps> = ({ articleList }) => {

    const totalSources = articleList.length;
    const totalResults = useAppSelector(state => state.news.totalResults)

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
            {totalResults > 0 && status === Status.LOADING && (
                // <DoughnutChart articleList={articleList} />
                <Loader />
            )}
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
                        {sourceList.map((entry, index) => (
                            <Cell
                                key={`cell-${index}`}
                                fill={doughnutColors[index % doughnutColors.length]}
                            />
                        ))}
                    </Pie>
                    {/* <Legend verticalAlign='bottom' content={renderLegend} /> */}
                </PieChart>
            </ResponsiveContainer>
        </>
    )
}

export default DoughnutGraph

