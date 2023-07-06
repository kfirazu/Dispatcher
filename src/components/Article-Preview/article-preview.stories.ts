import { Meta, StoryObj } from "@storybook/react";
import ArticlePreview from "./article-preview";

export default {
    component: ArticlePreview,
    title: "Components/article-preview",
} as Meta;

// const Template: Story<CardProps> = (args) => <Card {...args} />;
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



