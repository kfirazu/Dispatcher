import { Meta, StoryObj } from "@storybook/react";
import CustomDropdown from "./custom-dropdown";
import { MenuItem } from "@mui/material";

export default {
    component: CustomDropdown,
    title: "Components/Dropdown",
    argTypes: {
        children: { 
            options: ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'],
            mapping: {

            }
         }
    }
} as Meta;

type Story = StoryObj<typeof CustomDropdown>

export const Category: Story = {
    args: {
        id: 'category',
        label: 'category',
        labelId: 'category',
        placeholder: 'Category',
        children: ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'],
    }
}


