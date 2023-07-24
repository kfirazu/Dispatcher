import { FC, useEffect, useState } from "react"
import { Article } from "../../models/article-interface"
import newsData from '../../data/news.json'
import ArticlePreview from "../Article-Preview/article-preview"
import { StyledHeading3, StyledList, TotalResultsWrapper } from "./feed-list.style"
import useIsMobile from "../../hooks/useIsMobile"

interface FeedListProps {
    articleList: Article[]
    isSideBarOpen: boolean
}

const FeedList: FC<FeedListProps> = ({ articleList, isSideBarOpen }) => {

    const isMobile = useIsMobile()

    return (
        <div>
            {/* FIX: Change true condition in h3 to newsData.totalResults */}
            <TotalResultsWrapper >
                <StyledHeading3>{newsData.totalResults ? articleList.length : '0'} Total results</StyledHeading3>
            </TotalResultsWrapper>
            {articleList.length &&
                <StyledList isMobile={isMobile} isSideBarOpen={isSideBarOpen}>
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