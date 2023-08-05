import { FC, useMemo, useState } from "react"
import { Article } from "../../models/article-interface"
import { dashboardService } from "../../services/dashboard-service"
import { StyledSourceListWrapper } from "./dashboard.style"
import { SourceSpan, StyledSourceListItem } from "./source-percentage-list.style"


interface SourcePercentageListProps {
    articleList: Article[]
}

const SorucePercentageList: FC<SourcePercentageListProps> = ({ articleList }) => {

    const [sourceList, setSourceList] = useState<{ name: string, value: number }[]>([])

    useMemo(() => {
        const sourceMap = dashboardService.getSourcePercentageListToShow(articleList)
        setSourceList(sourceMap)
    }, [articleList])

    const doughnutColors = useMemo(() => dashboardService.uniqueColors(sourceList.length),
        [sourceList]
    );


    return (
        <StyledSourceListWrapper>
            {sourceList.map((source, idx) => (
                <StyledSourceListItem key={idx}>
                    <SourceSpan color={'#030035'}>{source.name}</SourceSpan>
                    <SourceSpan color={'#9FA2B4'}>{source.value.toFixed(1)}%</SourceSpan>

                </StyledSourceListItem>
            ))}
        </StyledSourceListWrapper>

    )

}

export default SorucePercentageList