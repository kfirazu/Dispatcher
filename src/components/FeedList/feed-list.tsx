import { FC, useCallback, useEffect, useRef, useState } from "react"
import { Article } from "../../models/article-interface"
import ArticlePreview from "../Article-Preview/article-preview"
import { FeedListWrapper, StyledList } from "./feed-list.style"
import useIsMobile from "../../hooks/useIsMobile"
import { useAppDispatch, useAppSelector } from "../../store/hooks.store"
import { UseIsTablet } from "../../hooks/useIsTablet"
import { useInfiniteQuery } from '@tanstack/react-query'
import { newsService } from "../../services/news.service"
import { Status, incrementPage, setIsFirstSearch, setTotalResults, updateArticleList } from "../../store/news/news.reducer"
import { FilterBy } from "../../models/filter-by"
import { MAX_ARTICLE_LENGTH, MAX_PAGE_NUM } from "../../constants/constants"
import Loader from "../Loader/loader"
import { toast } from "react-toastify"
import NewNoData from "../No-Data/new-no-data"
import SkeletonFeedList from "../skeletons/skeleton-feed-list"
// import { setIsLoading } from "../../store/system/system.reducer"

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
    const totalResults = useAppSelector(state => state.news.totalResults)
    const isFirstSearch = useAppSelector(state => state.news.isFirstSearch)
    const status = useAppSelector(state => state.news.status)
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
            const lastPageArticles = data.pages[data.pages.length - 1].articles
            const lastPageStatus = data.pages[data.pages.length - 1].status
            const totalResultsArr = data.pages.flatMap(page => page.totalResults)
            // get total amount of results
            const totalResults: number = totalResultsArr.reduce((acc, pageResults) => acc + pageResults, 0)
            // send only last page articles to store and spread it there
            dispatch(updateArticleList({ articles: lastPageArticles, totalResults: totalResults, status: lastPageStatus }));
            dispatch(setTotalResults(totalResults))
            // isLoading ? dispatch(setIsLoading(true)) : dispatch((setIsLoading(false)))
            // if (isFirstSearch) {   // FIX: happens on the first render and shoul happen only when scroll oe search
            //     dispatch(setIsFirstSearch());
            // }
        }
        else {
            console.log('got into else there is no data')
            dispatch(updateArticleList({ articles: [], totalResults: 0, status: 'succeeded' }))
        }
    }, [isFetchingNextPage, isLoading, data]);

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
            if (page < MAX_PAGE_NUM && totalResults < MAX_ARTICLE_LENGTH) {
                const res = await newsService.query(filterBy, searchQuery, pageParam)
                return res
            } else {
                console.log('GOT INTO ELSE!!!end of the list')
                toast.info(`No more articles. You have reached the end of the list`, {
                    position: "top-right",
                    autoClose: 2500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                setEndOfListMessage('No more articles. You have reached the end of the list.')
                return ['No more articles. You have reached the end of the list.'] // FIX : show this to the user at the bottom
            }
        } catch (err) {
            console.error('Error fetching data:', err)
            throw err
        }
    }

    return (
        <FeedListWrapper noArticles={totalResults === 0}>
            {/* {status === Status.LOADING && <Loader />} */}
            {status === Status.LOADING && <SkeletonFeedList />}

            {/* FIX: ShowSkeleton instead of loader */}
            {(status === Status.OK || status === Status.SUCCEEDED) && totalResults > 0 &&
                < StyledList isMobile={isMobile} isTablet={isTablet} isSideBarOpen={isSideBarOpen} >
                    {articleList.map((article: Article, idx: number) => (
                        // Adding a ref to the last element for infinite scroll
                        (articleList.length === idx + 1) ?
                            < li key={idx} ref={lastArticleRef} >
                                <ArticlePreview article={article} />
                            </li>
                            :
                            <li key={idx}>
                                <ArticlePreview article={article} />
                            </li>

                    ))}
                </StyledList>
            }

            {
                status === Status.SUCCEEDED && totalResults === 0 && (
                    <NewNoData type="search" />
                )
            }
            {
                endOfListMessage &&
                <div style={{ textAlign: 'center' }}>{endOfListMessage}</div>
            }
        </FeedListWrapper >


    )
}

export default FeedList