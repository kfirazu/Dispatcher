import type { Meta, StoryObj } from '@storybook/react';
import Filter from './filter-bar'

const meta = {
    title: 'COMPONENTS/Filter',
    component: Filter,
    tags: ['autodocs'],

} satisfies Meta<typeof Filter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FilterStory: Story = {
    args: {
   
    }
}