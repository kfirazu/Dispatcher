import { Meta, StoryObj } from "@storybook/react";
import ArticlePreview from "./article-preview";

export default {
    component: ArticlePreview,
    title: "Components/article-preview",
} as Meta;

type Story = StoryObj<typeof ArticlePreview>

export const ArticleCard: Story = {
    args: {
        article: {
            source: { id: 'u101', name: 'WGAL Susquehanna Valley Pa.' },
            title: 'Sheetz drops gas prices to $1.776 a gallon for Fourth of July - WGAL Susquehanna Valley Pa',
            url: 'https://www.wgal.com/article/sheetz-drops-gas-prices-dollar1776-gallon-fourth-of-july/44419414',
            urlToImage: 'https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/WLNEBID3OQUSPOJLDK2H42GTZQ_size-normalized.jpg&w=1440',
            description: 'The limited time promotion will begin at 12:01 a.m., and will last all day, or while promotional gallons last.',
            publishedAt: '2023-07-04T10:35:00Z',
            content: 'ALTOONA, Pa. —Sheetz announced it will celebrate the Fourth of July by reducing its gas prices to $1.776 a gallon. This reduced pricing commemorates the year when the Declaration of Independence was … [+908 chars]'
        }

    }

}



