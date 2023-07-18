import { Meta, StoryObj } from "@storybook/react";
import SearchInputDropdown from "./search-input-dropdown";

export default {
    component: SearchInputDropdown,
    title: "Components/SearchInputDropdown",
    tags: ['autodocs'],
    // decorators: [(story) => <div style={{ padding: '3rem' }}>{story()}</div>],
    argTypes: {
        children: { control: 'text' }
    }
} as Meta;

type Story = StoryObj<typeof SearchInputDropdown>

const mockItems = [
    { value: 'everything', name: 'Everything', },
    { value: 'top-headlines', name: 'Top Headlines', }
]

export const DesktopSearchInputDropdown: Story = {
    args: {
        id: 'input dropdwon',
        value: "Everything",
        items: mockItems,
        width: '225px',
        height: '57px',
        fontWeight: '400'
    }
}




