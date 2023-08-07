import React from 'react';
import { TitleStyled } from './feed-list-title.style';
import { useAppSelector } from '../../store/hooks.store'
import { locationService } from '../../services/location.service'
import useIsMobile from '../../hooks/useIsMobile';
import { UseIsTablet } from '../../hooks/useIsTablet';

export interface TitleProps {
    firstVisit?: boolean
  
}

const PageTitle: React.FC = () => {
    const isMobile = useIsMobile()
    const isTablet = UseIsTablet()
    const country = useAppSelector((state) => state.filter.filterBy.country)
    const isFirstSearch = useAppSelector((state) => state.news.isFirstSearch)
    const totalResults = useAppSelector((state) => state.news.totalResults)
    const countryTitle = locationService.findCountryById(country).title
    const articleList = useAppSelector((state) => state.news.articleList)
    return (
        <>
            {totalResults > 0 &&
                <TitleStyled isFirstSearch={isFirstSearch} isMobile={isMobile} isTablet={isTablet}>
                    {isFirstSearch && `Top Headlines In ${countryTitle}`}
                    {!isFirstSearch && totalResults > 0 && `${articleList.length} Total results`}
                </TitleStyled>
            }
        </>

    );
};

export default PageTitle;


// interface StyledTitleProps {
//     firstVisit: boolean
//     isMobile: boolean
//     isTablet: boolean
// }