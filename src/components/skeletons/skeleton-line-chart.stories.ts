import { Meta, StoryObj } from "@storybook/react";
import SkeletonAreaChart from "./skeleton-line-chart";

export default {
    component: SkeletonAreaChart,
    title: "Components/Skeleton",
    tags: ['autodocs'],
    argTypes: {
        children: { control: 'text' }
    }
} as Meta;

type Story = StoryObj<typeof SkeletonAreaChart>


export const DesktopSearchInputDropdown: Story = {
    args: {
      
    }
}




