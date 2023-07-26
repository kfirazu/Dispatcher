import { FC, useEffect, useState } from "react"
import { Article } from "../../models/article-interface"
import newsData from '../../data/news.json'
import ArticlePreview from "../Article-Preview/article-preview"
import { StyledHeading3, StyledList, TotalResultsWrapper } from "./feed-list.style"
import useIsMobile from "../../hooks/useIsMobile"
import { useAppSelector } from "../../store/hooks.store"
import { UseIsTablet } from "../../hooks/useIsTablet"

interface FeedListProps {
}

const FeedList: FC<FeedListProps> = () => {

    const isMobile = useIsMobile()
    const isTablet = UseIsTablet()
    const isSideBarOpen = useAppSelector(state => state.system.isSideBarOpen)
    const articleList = useAppSelector(state => state.news.articleList)

    return (
        <div>
            {/* FIX: Change true condition in h3 to newsData.totalResults */}
            <TotalResultsWrapper >
                <StyledHeading3>{newsData.totalResults ? articleList.length : '0'} Total results</StyledHeading3>
            </TotalResultsWrapper>
            {articleList.length &&
                <StyledList isMobile={isMobile} isTablet={isTablet} isSideBarOpen={isSideBarOpen}>
                    {articleList.map((article: Article, idx: number) => (
                        <li key={idx}>
                            <ArticlePreview article={article} />
                        </li>

                    ))}
                </StyledList>
            }
        </div>

    )
}

export default FeedList