import type { Meta, StoryObj } from '@storybook/react';
import Articles from '../../data/news.json'

import FeedList from './feed-list';

const meta = {
    title: 'COMPONENTS/FeedList',
    component: FeedList,
    tags: ['autodocs'],

} satisfies Meta<typeof FeedList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FeedListStory: Story = {
    args: {
        articleList: Articles.articles
    }
}