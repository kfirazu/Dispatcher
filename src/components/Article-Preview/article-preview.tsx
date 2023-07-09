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

    // const handleClick = () => {
    //     const newTab = window.open(url, '_blank')
    //     if (newTab !== null) {
    //         newTab.focus()
    //     }
    // }

    return (
        <ArticlePreviewWrapper>
            <ImgWrapper>
                <StyledImg src="https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/WLNEBID3OQUSPOJLDK2H42GTZQ_size-normalized.jpg&w=1440" alt="article" />
            </ImgWrapper>
            <ArticleContentWrapper>
                <DateWrapper>{newsService.formatDate(publishedAt)}</DateWrapper>
                <StyledHeading3>{title}</StyledHeading3>
                <StyledSourceWrapper>{source.name}</StyledSourceWrapper>
                <ParagraphWrapper width="720px">{content}</ParagraphWrapper>
                <ButtonWrapper>

                    <CustomButton
                        children={'NAVIGATE TO DISPATCH'}
                        // onClick={handleClick}
                        type="primary"
                        url={url}

                    />
                </ButtonWrapper>

            </ArticleContentWrapper>
        </ArticlePreviewWrapper>
    )
}

export default ArticlePreview

// onClick?: () => void
// children?: ReactNode
// sxProps?: SxProps
// type: ButtonType
// url: string