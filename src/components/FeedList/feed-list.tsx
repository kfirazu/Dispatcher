import { FC, useCallback, useEffect, useRef, useState } from "react"
import { Article } from "../../models/article-interface"
import newsData from '../../data/news.json'
import ArticlePreview from "../Article-Preview/article-preview"
import { StyledHeading3, StyledList, TotalResultsWrapper } from "./feed-list.style"
import useIsMobile from "../../hooks/useIsMobile"
import { useAppDispatch, useAppSelector } from "../../store/hooks.store"
import { UseIsTablet } from "../../hooks/useIsTablet"
import { useInfiniteQuery } from '@tanstack/react-query'
import { newsService } from "../../services/news.service"
import { incrementPage, updateArticleList } from "../../store/news/news.reducer"
import { FilterBy } from "../../models/filter-by"
import { MAX_ARTICLE_LENGTH, MAX_PAGE_NUM } from "../../constants/constants"

interface FeedListProps {
}

const FeedList: FC<FeedListProps> = () => {

    const isMobile = useIsMobile()
    const isTablet = UseIsTablet()
    const dispatch = useAppDispatch()
    const isSideBarOpen = useAppSelector(state => state.system.isSideBarOpen)
    const articleList = useAppSelector(state => state.news.articleList)
    const filterBy = useAppSelector(state => state.filter.filterBy)
    const searchQuery = useAppSelector(state => state.filter.searchQuery)
    const page = useAppSelector(state => state.news.page)
    const observer = useRef<IntersectionObserver | null>()
    const [endOfListMessage, setEndOfListMessage] = useState<string | null>(null)



    const { data, isLoading, error, isFetchingNextPage, hasNextPage, fetchNextPage } = useInfiniteQuery({
        queryKey: ['articles', 'infinite'],
        getNextPageParam: (lastPage: any, allPages) => {
            const nextPage = allPages.length + 1
            return lastPage.articles?.length > 0 ? nextPage : undefined
        },
        queryFn: ({ pageParam = 1 }) => loadMoreArticles(filterBy, searchQuery, pageParam),

    })

    useEffect(() => {
        if (data) {
            // Flatten the pages and get the articles from each page
            const newArticles = data.pages.flatMap(page => page.articles
            )
            dispatch(updateArticleList(newArticles));
        }
    }, [isFetchingNextPage, isLoading]);

    const lastArticleRef = useCallback((node: any) => {
        if (isLoading) return
        if (observer.current) {
            observer.current.disconnect()
        }
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && hasNextPage && page < MAX_PAGE_NUM && articleList.length <= MAX_ARTICLE_LENGTH) {
                // setPageNumber((prevPage) => prevPage + 1)
                dispatch(incrementPage)

                if (!isFetchingNextPage) {
                    fetchNextPage()
                }
            }
        })
        if (node) {
            observer.current.observe(node)
        }
    }, [isLoading, hasNextPage, isFetchingNextPage])

    const loadMoreArticles = async (filterBy: FilterBy, searchQuery: string, pageParam: number) => {
        try {
            if (page < MAX_PAGE_NUM && articleList.length <= MAX_ARTICLE_LENGTH) {
                const res = await newsService.query(filterBy, searchQuery, pageParam)
                return res
            } else {
                setEndOfListMessage('No more articles. You have reached the end of the list.')
                return ['No more articles. You have reached the end of the list.'] // FIX : show this to the user at the bottom
            }
        } catch (err) {
            console.error('Error fetching data:', err)
            throw err
        }
    }

    return (
        <div>
            <TotalResultsWrapper >
                <button onClick={() => console.log('data:', data)} >Click</button>
                <StyledHeading3>{newsData.totalResults ? articleList.length : '0'} Total results</StyledHeading3>
                {isLoading && (<div>Loading...</div>)}
            </TotalResultsWrapper>
            {articleList.length &&
                <StyledList isMobile={isMobile} isTablet={isTablet} isSideBarOpen={isSideBarOpen} >
                    {articleList.map((article: Article, idx: number) => (
                        // Adding a ref to the last element for infinite scroll
                        (articleList.length === idx + 1) ?
                            < li key={idx} ref={lastArticleRef} >
                                {/* <li key={idx}> */}
                                <ArticlePreview article={article} />
                            </li>
                            :
                            <li key={idx}>
                                <ArticlePreview article={article} />
                            </li>

                    ))}

                </StyledList>
            }
            { endOfListMessage &&
                <div style={{textAlign: 'center'}}>{endOfListMessage}</div>
            }

        </div >


    )
}

export default FeedList