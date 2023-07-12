import { Meta, StoryObj } from "@storybook/react";
import SortBar from "./sort-bar";

import * as DropdownStories from '../Dropdown/custom-dropdown.stories'


export default {
    component: SortBar,
    title: "Components/SortBar",
} as Meta;

type Story = StoryObj<typeof SortBar>

export const SearchInputDropdown: Story = {
    args: {
        dropdowns: [
            { ...DropdownStories.default.args }
        ]

    }
}



