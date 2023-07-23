import type { Meta, StoryObj } from '@storybook/react'
import SideBar from './side-bar';

const meta = {
    title: 'COMPONENTS/SideBar',
    component: SideBar,
    tags: ['autodocs'],

} satisfies Meta<typeof SideBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RecentSearchStory: Story = {
    args: {
        onCloseSideBar: () => console.log('closed'),
        isSideBarOpen: true

    }
}