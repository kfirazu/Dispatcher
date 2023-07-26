import { FC } from "react"
import { ArticleContentWrapper, ArticlePreviewWrapper, DateWrapper, ImgWrapper, StyledHeading3, ParagraphWrapper, StyledSourceWrapper, StyledImg } from "./article-preview.style"
import CustomButton from "../Button/button"
import { newsService } from "../../services/news.service"
import { Article } from "../../models/article-interface"
import useIsMobile from "../../hooks/useIsMobile"
import { UseIsTablet } from "../../hooks/useIsTablet"
import { StyledButtonWrapper } from "../Button/button.style"

interface ArticlePreviewProps {
    article: Article
}

const ArticlePreview: FC<ArticlePreviewProps> = ({ article }) => {

    const isMobile = useIsMobile()
    const isTablet = UseIsTablet()
    const fallbackImage = 'https://s.abcnews.com/images/US/delray-suitcase-2-ht-bb-230724_1690235353112_hpMain_16x9_992.jpg'

    const { source, title, url, urlToImage, publishedAt, content } = article

    return (
        <ArticlePreviewWrapper isMobile={isMobile} isTablet={isTablet}>
            <ImgWrapper isMobile={isMobile} isTablet={isTablet}>
                <StyledImg src={urlToImage ? urlToImage : fallbackImage} alt="article" isMobile={isMobile} />
            </ImgWrapper>
            <ArticleContentWrapper isMobile={isMobile} isTablet={isTablet}>
                <DateWrapper >{newsService.formatDate(publishedAt)}</DateWrapper>
                <StyledHeading3 isMobile={isMobile} isTablet={isTablet} >{title}</StyledHeading3>
                <StyledSourceWrapper isMobile={isMobile} isTablet={isTablet}>{source.name}</StyledSourceWrapper>
                <ParagraphWrapper isMobile={isMobile} isTablet={isTablet} width="720px">{content}</ParagraphWrapper>
                <StyledButtonWrapper isMobile={isMobile}>

                    <CustomButton
                        children={'NAVIGATE TO DISPATCH'}
                        type="primary"
                        url={url}
                        isIcon={true}

                    />
                </StyledButtonWrapper>

            </ArticleContentWrapper>
        </ArticlePreviewWrapper >
    )
}

export default ArticlePreview
