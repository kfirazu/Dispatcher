import { Meta, StoryObj } from "@storybook/react";
import InputDropdown from "./input-dropdown";

export default {
    component: InputDropdown,
    title: "Components/InputDropdown",
} as Meta;

type Story = StoryObj<typeof InputDropdown>

export const SearchInputDropdown: Story = {
    args: {
        id: 'input dropdwon',
        value: "Everything",
        children: ['Everything', 'Top Headlines'],
        width: '225px',
        height: '57px',
        fontWeight: '400',
    }
}



