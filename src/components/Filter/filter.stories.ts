import type { Meta, StoryObj } from '@storybook/react';
import FilterBar from './filter-bar'

const meta = {
    title: 'COMPONENTS/Filter',
    component: FilterBar,
    tags: ['autodocs'],

} satisfies Meta<typeof FilterBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FilterStory: Story = {
    args: {
   
    }
}