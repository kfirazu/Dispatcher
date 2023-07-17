import { FC, useMemo, useState } from "react"
import { Article } from "../../models/article-interface"
import { dashboardService } from "../../services/dashboard-service"
import { StyledSourceListWrapper } from "./dashboard.style"
import { SourceSpan, StyledSourceListItem } from "./source-percentage-list.style"


interface SourcePercentageListProps {
    articleList: Article[]
}

const SorucePercentageList: FC<SourcePercentageListProps> = ({ articleList }) => {

    const [sourceList, setSourceList] = useState<{ name: string, percentage: number }[]>([])

    useMemo(() => {
        const sourceMap = dashboardService.getSourcePercentageListToShow(articleList)
        setSourceList(sourceMap)
    }, [articleList])


    return (
        <StyledSourceListWrapper>
            {sourceList.map((source, idx) => (
                <StyledSourceListItem key={idx}>
                    <SourceSpan color={'#030035'}>{source.name}</SourceSpan>
                    <SourceSpan color={'#9FA2B4'}>{source.percentage}%</SourceSpan>

                </StyledSourceListItem>
            ))}
        </StyledSourceListWrapper>

    )

}

export default SorucePercentageList