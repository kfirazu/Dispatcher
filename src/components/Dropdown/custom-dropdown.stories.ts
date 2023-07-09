import { Meta, StoryObj } from "@storybook/react";
import CustomDropdown from "./custom-dropdown";

export default {
    component: CustomDropdown,
    title: "Components/Dropdown",
} as Meta;

// const Template: Story<CardProps> = (args) => <Card {...args} />;
type Story = StoryObj<typeof CustomDropdown>

// const Template: Story<CustomDrodownProps> = (args) => <CustomDropdown{ ...args } />


export const Category: Story = {
    args: {
        id: 'category',
        label: 'category',
        labelId: 'category',
        children: ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'],
    }
}



