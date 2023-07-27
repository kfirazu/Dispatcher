import type { Meta, StoryObj } from '@storybook/react';
import SortBar from './sort-bar'

const meta = {
    title: 'COMPONENTS/SortBar',
    component: SortBar,
    tags: ['autodocs'],

} satisfies Meta<typeof SortBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FilterStory: Story = {
    args: {
   
    }
}