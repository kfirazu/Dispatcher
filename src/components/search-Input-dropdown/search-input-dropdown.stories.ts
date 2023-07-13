import { Meta, StoryObj } from "@storybook/react";
import SearchInputDropdown from "./search-input-dropdown";

export default {
    component: SearchInputDropdown,
    title: "Components/SearchInputDropdown",
    tags: ['autodocs'],
    // decorators: [(story) => <div style={{ padding: '3rem' }}>{story()}</div>],
    argTypes: {
        children: { control: 'text'}
    }
} as Meta;

type Story = StoryObj<typeof SearchInputDropdown>

export const DesktopSearchInputDropdown: Story = {
    args: {
        id: 'input dropdwon',
        // value: "Everything",
        children: ['Everything', 'Top Headlines'],
        width: '225px',
        height: '57px',
        fontWeight: '400'
    }
}




