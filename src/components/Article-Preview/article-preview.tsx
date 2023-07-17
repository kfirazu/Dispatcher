import { FC } from "react"
import { ArticleContentWrapper, ArticlePreviewWrapper, DateWrapper, ImgWrapper, StyledHeading3, ParagraphWrapper, StyledSourceWrapper, ButtonWrapper, StyledImg } from "./article-preview.style"
import CustomButton from "../Button/button"
import { newsService } from "../../services/news.service"
import { Article } from "../../models/article-interface"

interface ArticlePreviewProps {
    article: Article
}

const ArticlePreview: FC<ArticlePreviewProps> = ({ article }) => {

    const { source, title, url, urlToImage, publishedAt, content } = article

    return (
        <ArticlePreviewWrapper>
            <ImgWrapper>
                <StyledImg src={urlToImage} alt="article" />
            </ImgWrapper>
            <ArticleContentWrapper>
                <DateWrapper>{newsService.formatDate(publishedAt)}</DateWrapper>
                <StyledHeading3>{title}</StyledHeading3>
                <StyledSourceWrapper>{source.name}</StyledSourceWrapper>
                <ParagraphWrapper width="720px">{content}</ParagraphWrapper>
                <ButtonWrapper>

                    <CustomButton
                        children={'NAVIGATE TO DISPATCH'}
                        type="primary"
                        url={url}

                    />
                </ButtonWrapper>

            </ArticleContentWrapper>
        </ArticlePreviewWrapper>
    )
}

export default ArticlePreview
