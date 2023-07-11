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
            source: { id: '', name: '' },
            title: '',
            url: '',
            urlToImage: '',
            description: '',
            publishedAt: '',
            content: ''
        }

    }

}



