import { Meta, StoryObj } from "@storybook/react";
import CustomDropdown from "./custom-dropdown";
import { StyledMenuListSX } from "./custom-dropdown.styles";

const meta = {
    title: "Components/Dropdown",
    component: CustomDropdown,

} satisfies Meta<typeof CustomDropdown>

export default meta
type Story = StoryObj<typeof meta>


const mockCategories = [
    { value: 'business', name: 'Business' },
    { value: 'entertainment', name: 'Entertainment' },
    { value: 'general', name: 'General' },
    { value: 'health', name: 'Health' },
    { value: 'science', name: 'Science' },
    { value: 'sports', name: 'Sports' },
    { value: 'technology', name: 'Technology' }

]

export const Category: Story = {
    args: {
        id: 'category',
        label: 'category',
        labelId: 'category',
        type: 'Category',
        items: mockCategories,
        sx: StyledMenuListSX

    }
}


